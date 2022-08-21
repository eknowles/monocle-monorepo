import {
  GetIceCandidatesWebRTCResponse,
  MonocleServiceClientImpl,
} from "@monocle/protobuf/generated/monocle";

/**
 * Interface with WebRTC-streamer API
 * @constructor
 * @param grpc
 * @param {string} videoElement - id of the video element tag
 * @param {string} srvurl -  url of webrtc-streamer (default is current location)
 * @param videotrackid
 * @param recording
 */
function WebRtcStreamer(
  grpc: Grpc,
  videoElement: HTMLVideoElement | string,
  srvurl: string,
  recording: number | string,
  videotrackid: number
) {
  // @ts-ignore
  this.videotrackid = videotrackid;
  // @ts-ignore
  this.recording = recording;
  // @ts-ignore
  this.videoElement = videoElement as HTMLVideoElement;
  // @ts-ignore
  this.srvurl = srvurl;
  // @ts-ignore
  this.pc = null;
  // @ts-ignore
  this.grpc = grpc;

  // @ts-ignore
  this.mediaConstraints = {
    sdpSemantics: 'unified-plan',
    bundlePolicy: 'max-bundle',
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  };

  // @ts-ignore
  this.iceServers = null;
  // @ts-ignore
  this.earlyCandidates = [];
}

type Grpc = { client: MonocleServiceClientImpl; meta: any };

WebRtcStreamer.prototype._handleHttpErrors = function (response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Connect a WebRTC Stream to videoElement
 */
WebRtcStreamer.prototype.connect = function () {
  this.disconnect();

  // getIceServers is not already received
  if (!this.iceServers) {
    console.debug("Get IceServers");

    // leave as is
    fetch(this.srvurl + "/api/getIceServers")
      .then(this._handleHttpErrors)
      .then((response) => response.json())
      .then((response) => this.onReceiveGetIceServers.call(this, response))
      .catch((error) => this.onError("getIceServers " + error));
  } else {
    this.onReceiveGetIceServers(this.iceServers);
  }
};

/**
 * Disconnect a WebRTC Stream and clear videoElement source
 */
WebRtcStreamer.prototype.disconnect = function () {
  if (this.videoElement) {
    this.videoElement.src = "";
  }
  if (this.pc) {
    this.grpc.client
      .HangUpWebRTC({ peerid: this.pc.peerid }, this.grpc.meta)
      .toPromise()
      .catch((error: any) => this.onError("hangup " + error));

    try {
      this.pc.close();
    } catch (e) {
      console.debug("Failure close peer connection:" + e);
    }
    this.pc = null;
  }
};

/*
 * GetIceServers callback
 */
type IceServers = { iceServers: string[] };
WebRtcStreamer.prototype.onReceiveGetIceServers = function (
  iceServers: IceServers
) {
  this.iceServers = iceServers;
  this.pcConfig = iceServers || { iceServers: [] };
  try {
    this.createPeerConnection();

    // if (stream) {
    //   this.pc.addStream(stream);
    // }

    // clear early candidates
    this.earlyCandidates.length = 0;

    // create Offer
    const bind = this;
    this.pc.createOffer(this.mediaConstraints).then(
      function (sessionDescription: RTCSessionDescription) {
        console.debug("Create offer:" + JSON.stringify(sessionDescription));

        bind.pc.setLocalDescription(
          sessionDescription,
          function () {
            const options = {
              peerid: bind.pc.peerid,
              recording: `${bind.recording}`,
              videotrackid: +bind.videotrackid,
              audiotrackid: 0,
              sdp: sessionDescription.sdp,
            };

            console.debug(options);

            bind.grpc.client
              .CallWebRTC(options, bind.grpc.meta)
              .toPromise()
              .then((response: any) => bind.onReceiveCall.call(bind, response))
              .catch((error: any) => bind.onError("call " + error));
          },
          function (error: any) {
            console.debug("setLocalDescription error:" + JSON.stringify(error));
          }
        );
      },
      function (error: any) {
        alert("Create offer error:" + JSON.stringify(error));
      }
    );
  } catch (e) {
    this.disconnect();
    alert("connect error: " + e);
  }
};

WebRtcStreamer.prototype.getIceCandidate = function () {
  this.grpc.client
    .GetIceCandidatesWebRTC(
      {
        peerid: this.pc.peerid,
      },
      this.grpc.meta
    )
    .toPromise()
    .then((response: GetIceCandidatesWebRTCResponse) => {
      this.onReceiveCandidate.call(this, JSON.parse(response.peerlist));
    })
    .catch((error: any) => this.onError("getIceCandidate " + error));
};

/*
 * create RTCPeerConnection
 */
WebRtcStreamer.prototype.createPeerConnection = function () {
  console.debug(
    "createPeerConnection  config: " + JSON.stringify(this.pcConfig)
  );
  this.pc = new RTCPeerConnection(this.pcConfig);
  const pc = this.pc;
  pc.peerid = `${Math.random()}`;

  const bind = this;
  pc.onicecandidate = function (evt: any) {
    bind.onIceCandidate.call(bind, evt);
  };
  pc.onaddstream = function (evt: any) {
    bind.onAddStream.call(bind, evt);
  };
  pc.oniceconnectionstatechange = function (evt: any) {
    console.debug(
      "oniceconnectionstatechange  state: " + pc.iceConnectionState
    );
    if (bind.videoElement) {
      if (pc.iceConnectionState === "connected") {
        // bind.videoElement.style.opacity = "1.0";
      } else if (pc.iceConnectionState === "disconnected") {
        // bind.videoElement.style.opacity = "0.25";
      } else if (
        pc.iceConnectionState === "failed" ||
        pc.iceConnectionState === "closed"
      ) {
        // bind.videoElement.style.opacity = "0.5";
      } else if (pc.iceConnectionState === "new") {
        bind.getIceCandidate.call(bind);
      }
    }
  };
  pc.ondatachannel = function (evt: any) {
    console.debug("remote datachannel created:" + JSON.stringify(evt));

    evt.channel.onopen = function () {
      console.debug("remote datachannel open");
      this.send("remote channel opened");
    };
    evt.channel.onmessage = function (event: any) {
      console.debug("remote datachannel recv:" + JSON.stringify(event.data));
    };
  };
  pc.onicegatheringstatechange = function () {
    if (pc.iceGatheringState === "complete") {
      const receivers = pc.getReceivers();

      receivers.forEach((receiver: RTCRtpReceiver) => {
        if (receiver.track && receiver.track.kind === "video") {
          console.debug(
            "codecs:" + JSON.stringify(receiver.getParameters().codecs)
          );
        }
      });
    }
  };

  try {
    const dataChannel = pc.createDataChannel("ClientDataChannel");
    dataChannel.onopen = function () {
      console.debug("local datachannel open");
      this.send("local channel opened");
    };
    dataChannel.onmessage = function (evt: MessageEvent) {
      console.debug("local datachannel recv:" + JSON.stringify(evt.data));
    };
  } catch (e) {
    console.debug("Cannot create datachannel error: " + e);
  }

  console.debug(
    "Created RTCPeerConnnection with config: " + JSON.stringify(this.pcConfig)
  );
  return pc;
};

/*
 * RTCPeerConnection IceCandidate callback
 */
WebRtcStreamer.prototype.onIceCandidate = function (event: RTCIceCandidate) {
  if (event.candidate) {
    if (this.pc.currentRemoteDescription) {
      this.addIceCandidate(this.pc.peerid, event.candidate);
    } else {
      this.earlyCandidates.push(event.candidate);
    }
  } else {
    console.debug("End of candidates.");
  }
};

WebRtcStreamer.prototype.addIceCandidate = function (
  peerid: string,
  icecandidiate: RTCIceCandidate
) {
  const { candidate, sdpMid, sdpMLineIndex } = icecandidiate;

  const addIceCandidatePayload = {
    peerid: peerid,
    icecandidiate: JSON.stringify({ candidate, sdpMid, sdpMLineIndex }),
  };

  console.debug({ addIceCandidatePayload });

  this.grpc.client
    .AddIceCandidateWebRTC(addIceCandidatePayload, this.grpc.meta)
    .toPromise()
    .then((response: any) => {
      console.debug("addIceCandidate ok:" + response);
    })
    .catch((error: any) => this.onError("addIceCandidate " + error));
};

/*
 * RTCPeerConnection AddTrack callback
 */
WebRtcStreamer.prototype.onAddStream = function (event: any) {
  console.debug("Remote track added:" + JSON.stringify(event));

  this.videoElement.srcObject = event.stream;
  this.videoElement
    .play()
    .then(() => {
      this.videoElement.controls = false;
      this.videoElement.style.opacity = "1.0";
    })
    .catch(function (error: any) {
      console.warn("error:" + error);
    });
};

/*
 * AJAX /call callback
 */
WebRtcStreamer.prototype.onReceiveCall = function (dataJson: any) {
  const bind = this;
  console.debug("offer: " + JSON.stringify(dataJson));
  const descr = new RTCSessionDescription({
    sdp: dataJson.sdp,
    type: "answer",
  });
  this.pc.setRemoteDescription(
    descr,
    function () {
      console.debug("setRemoteDescription ok");
      while (bind.earlyCandidates.length) {
        const candidate = bind.earlyCandidates.shift();
        bind.addIceCandidate.call(bind, bind.pc.peerid, candidate);
      }

      bind.getIceCandidate.call(bind);
    },
    function (error: any) {
      console.debug("setRemoteDescription error:" + JSON.stringify(error));
    }
  );
};

/*
 * AJAX /getIceCandidate callback
 */
WebRtcStreamer.prototype.onReceiveCandidate = function (dataJson: any) {
  console.debug("candidate: " + JSON.stringify(dataJson));
  if (dataJson) {
    for (let i = 0; i < dataJson.length; i++) {
      const candidate = new RTCIceCandidate(dataJson[i]);

      console.debug("Adding ICE candidate :" + JSON.stringify(candidate));
      this.pc.addIceCandidate(
        candidate,
        function () {
          console.debug("addIceCandidate OK");
        },
        function (error: any) {
          console.debug("addIceCandidate error:" + JSON.stringify(error));
        }
      );
    }
    this.pc.addIceCandidate();
  }
};

/*
 * AJAX callback for Error
 */
WebRtcStreamer.prototype.onError = function (status: any) {
  console.debug("onError:" + status);
};

export default WebRtcStreamer;
