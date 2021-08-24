import { MonocleServiceClientImpl } from "../../../../../protobuf/generated/monocle";

type Grpc = { client: MonocleServiceClientImpl; meta: any };

/**
 * Interface with WebRTC-streamer API
 * @constructor
 * @param grpc
 * @param {string} videoElement - id of the video element tag
 * @param {string} srvurl -  url of webrtc-streamer (default is current location)
 * @param videotrackid
 * @param recording
 */
const WebRtcStreamer = function WebRtcStreamer(
  grpc: Grpc,
  videoElement: HTMLVideoElement | string,
  srvurl: string,
  videotrackid: number,
  recording: number
) {
  this.videotrackid = videotrackid;
  this.recording = recording;
  this.videoElement = videoElement;
  this.srvurl = srvurl;
  this.pc = null;
  this.grpc = grpc;

  this.mediaConstraints = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  };

  this.iceServers = null;
  this.earlyCandidates = [];
};

WebRtcStreamer.prototype._handleHttpErrors = function (response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Connect a WebRTC Stream to videoElement
 * @param {string} videourl - id of WebRTC video stream
 * @param {string} audiourl - id of WebRTC audio stream
 * @param {string} options -  options of WebRTC call
 * @param {string} stream  -  local stream to send
 */
WebRtcStreamer.prototype.connect = function (
  videourl: string,
  audiourl: string,
  options: string,
  localstream: string
) {
  this.disconnect();

  // getIceServers is not already received
  if (!this.iceServers) {
    console.log("Get IceServers");

    // leave as is
    fetch(this.srvurl + "/api/getIceServers")
      .then(this._handleHttpErrors)
      .then((response) => response.json())
      .then((response) =>
        this.onReceiveGetIceServers.call(this, response, localstream)
      )
      .catch((error) => this.onError("getIceServers " + error));
  } else {
    this.onReceiveGetIceServers(this.iceServers, localstream);
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
      console.log("Failure close peer connection:" + e);
    }
    this.pc = null;
  }
};

/*
 * GetIceServers callback
 */
WebRtcStreamer.prototype.onReceiveGetIceServers = function (
  iceServers,
  stream
) {
  this.iceServers = iceServers;
  this.pcConfig = iceServers || { iceServers: [] };
  try {
    this.createPeerConnection();

    if (stream) {
      this.pc.addStream(stream);
    }

    // clear early candidates
    this.earlyCandidates.length = 0;

    // create Offer
    const bind = this;
    this.pc.createOffer(this.mediaConstraints).then(
      function (sessionDescription: RTCSessionDescription) {
        console.log("Create offer:" + JSON.stringify(sessionDescription));

        bind.pc.setLocalDescription(
          sessionDescription,
          function () {
            const options = {
              recording: `${bind.recording}`,
              videotrackid: +bind.videotrackid,
              audiotrackid: 0,
              sdp: sessionDescription.sdp,
            };
            console.log(options);
            bind.grpc.client
              .CallWebRTC(options, bind.grpc.meta)
              .toPromise()
              .then((response) => bind.onReceiveCall.call(bind, response))
              .catch((error) => bind.onError("call " + error));
          },
          function (error: any) {
            console.log("setLocalDescription error:" + JSON.stringify(error));
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
    .then((response) => {
      console.log({ response });
      // this.onReceiveCandidate.call(this, response)
    })
    .catch((error) => this.onError("getIceCandidate " + error));
};

/*
 * create RTCPeerConnection
 */
WebRtcStreamer.prototype.createPeerConnection = function () {
  console.log("createPeerConnection  config: " + JSON.stringify(this.pcConfig));
  this.pc = new RTCPeerConnection(this.pcConfig);
  const pc = this.pc;
  pc.peerid = Math.random();

  const bind = this;
  pc.onicecandidate = function (evt: any) {
    bind.onIceCandidate.call(bind, evt);
  };
  pc.onaddstream = function (evt: any) {
    bind.onAddStream.call(bind, evt);
  };
  pc.oniceconnectionstatechange = function (evt: any) {
    console.log("oniceconnectionstatechange  state: " + pc.iceConnectionState);
    if (bind.videoElement) {
      if (pc.iceConnectionState === "connected") {
        bind.videoElement.style.opacity = "1.0";
      } else if (pc.iceConnectionState === "disconnected") {
        bind.videoElement.style.opacity = "0.25";
      } else if (
        pc.iceConnectionState === "failed" ||
        pc.iceConnectionState === "closed"
      ) {
        bind.videoElement.style.opacity = "0.5";
      } else if (pc.iceConnectionState === "new") {
        bind.getIceCandidate.call(bind);
      }
    }
  };
  pc.ondatachannel = function (evt: any) {
    console.log("remote datachannel created:" + JSON.stringify(evt));

    evt.channel.onopen = function () {
      console.log("remote datachannel open");
      this.send("remote channel openned");
    };
    evt.channel.onmessage = function (event: any) {
      console.log("remote datachannel recv:" + JSON.stringify(event.data));
    };
  };
  pc.onicegatheringstatechange = function () {
    if (pc.iceGatheringState === "complete") {
      const recvs = pc.getReceivers();

      recvs.forEach((recv) => {
        if (recv.track && recv.track.kind === "video") {
          console.log("codecs:" + JSON.stringify(recv.getParameters().codecs));
        }
      });
    }
  };

  try {
    const dataChannel = pc.createDataChannel("ClientDataChannel");
    dataChannel.onopen = function () {
      console.log("local datachannel open");
      this.send("local channel opened");
    };
    dataChannel.onmessage = function (evt) {
      console.log("local datachannel recv:" + JSON.stringify(evt.data));
    };
  } catch (e) {
    console.log("Cannot create datachannel error: " + e);
  }

  console.log(
    "Created RTCPeerConnnection with config: " + JSON.stringify(this.pcConfig)
  );
  return pc;
};

/*
 * RTCPeerConnection IceCandidate callback
 */
WebRtcStreamer.prototype.onIceCandidate = function (event) {
  if (event.candidate) {
    if (this.pc.currentRemoteDescription) {
      this.addIceCandidate(this.pc.peerid, event.candidate);
    } else {
      this.earlyCandidates.push(event.candidate);
    }
  } else {
    console.log("End of candidates.");
  }
};

WebRtcStreamer.prototype.addIceCandidate = function (
  peerid,
  icecandidiate: RTCIceCandidate
) {
  const { candidate, sdpMid, sdpMLineIndex } = icecandidiate;

  const addIceCandidatePayload = {
    peerid: peerid.toString(),
    icecandidiate: { candidate, sdpMid, sdpMLineIndex },
  };

  console.log({ addIceCandidatePayload });

  this.grpc.client
    .AddIceCandidateWebRTC(addIceCandidatePayload, this.grpc.meta)
    .toPromise()
    .then((response) => {
      console.log("addIceCandidate ok:" + response);
    })
    .catch((error) => this.onError("addIceCandidate " + error));
};

/*
 * RTCPeerConnection AddTrack callback
 */
WebRtcStreamer.prototype.onAddStream = function (event) {
  console.log("Remote track added:" + JSON.stringify(event));

  this.videoElement.srcObject = event.stream;
  const promise = this.videoElement.play();
  if (promise !== undefined) {
    const bind = this;
    promise.catch(function (error: any) {
      console.warn("error:" + error);
      bind.videoElement.setAttribute("controls", true);
    });
  }
};

/*
 * AJAX /call callback
 */
WebRtcStreamer.prototype.onReceiveCall = function (dataJson) {
  const bind = this;
  console.log("offer: " + JSON.stringify(dataJson));
  const descr = new RTCSessionDescription({
    sdp: dataJson.sdp,
    type: "answer",
  });
  this.pc.setRemoteDescription(
    descr,
    function () {
      console.log("setRemoteDescription ok");
      while (bind.earlyCandidates.length) {
        const candidate = bind.earlyCandidates.shift();
        bind.addIceCandidate.call(bind, bind.pc.peerid, candidate);
      }

      bind.getIceCandidate.call(bind);
    },
    function (error: any) {
      console.log("setRemoteDescription error:" + JSON.stringify(error));
    }
  );
};

/*
 * AJAX /getIceCandidate callback
 */
WebRtcStreamer.prototype.onReceiveCandidate = function (dataJson) {
  console.log("candidate: " + JSON.stringify(dataJson));
  if (dataJson) {
    for (let i = 0; i < dataJson.length; i++) {
      const candidate = new RTCIceCandidate(dataJson[i]);

      console.log("Adding ICE candidate :" + JSON.stringify(candidate));
      this.pc.addIceCandidate(
        candidate,
        function () {
          console.log("addIceCandidate OK");
        },
        function (error: any) {
          console.log("addIceCandidate error:" + JSON.stringify(error));
        }
      );
    }
    this.pc.addIceCandidate();
  }
};

/*
 * AJAX callback for Error
 */
WebRtcStreamer.prototype.onError = function (status) {
  console.log("onError:" + status);
};

export default WebRtcStreamer;
