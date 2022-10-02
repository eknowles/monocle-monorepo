import {
  AddIceCandidateWebRTCRequest,
  GetIceCandidatesWebRTCResponse,
  MonocleServiceClientImpl,
} from "@monocle/protobuf/generated/monocle";

type Grpc = { client: MonocleServiceClientImpl; meta: any };
type IceServers = { iceServers: string[] };
export type WebRTCOptions = {
  videotrackid: number;
  recording: number | string;
  videoElement: HTMLVideoElement;
  srvurl: string;
  grpc: Grpc;
};

export class WebRTC {
  public peerid: string;
  private grpc: Grpc;
  private srvurl: string;
  private videotrackid: number;
  private recording: number | string;
  private videoElement: HTMLVideoElement;

  private pc: RTCPeerConnection | null = null;
  private mediaConstraints: RTCOfferOptions;
  private pcConfig?: RTCConfiguration;
  private iceServers?: Pick<RTCConfiguration, "iceServers">;
  private earlyCandidates: RTCIceCandidate[];

  constructor(options: WebRTCOptions) {
    this.pc = null;
    this.peerid = `${Math.random() + 1}`.replace(".", "");
    this.videotrackid = options.videotrackid;
    this.recording = options.recording;
    this.videoElement = options.videoElement;
    this.srvurl = options.srvurl;
    this.grpc = options.grpc;

    this.mediaConstraints = {
      // sdpSemantics: "unified-plan",
      // bundlePolicy: "max-bundle",
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    };

    this.iceServers = undefined;
    this.earlyCandidates = [];
  }

  log(message: string, objects: object = {}) {
    console.debug({ message, objects });
  }

  disconnect() {
    if (this.videoElement) {
      this.videoElement.src = "";
    }
    if (this.pc) {
      this.grpc.client
        .HangUpWebRTC({ peerid: this.peerid }, this.grpc.meta)
        .toPromise()
        .catch((error: any) => this.onError("hangup " + error));

      try {
        this.pc.close();
      } catch (e) {
        this.log("Failure close peer connection", { e });
      }
      this.pc = null;
    }
  }

  connect() {
    this.disconnect();

    // getIceServers is not already received
    if (!this.iceServers) {
      this.log("Get IceServers");

      // leave as is
      fetch(this.srvurl + "/api/getIceServers")
        .then(this._handleHttpErrors)
        .then((response) => response.json())
        .then((response) => this.onReceiveGetIceServers.call(this, response))
        .catch((error) => this.onError("getIceServers " + error));
    } else {
      this.onReceiveGetIceServers(this.iceServers);
    }
  }

  onError(status: any) {
    console.error("error", { status });
  }

  private _handleHttpErrors(response: any) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  onReceiveGetIceServers(config: RTCConfiguration) {
    this.iceServers = config;
    this.pcConfig = config || { iceServers: [] };
    try {
      this.createPeerConnection();

      // clear early candidates
      this.earlyCandidates.length = 0;

      // create Offer
      const bind = this;
      this.pc?.createOffer(this.mediaConstraints).then(
        (sessionDescription: RTCSessionDescriptionInit) => {
          this.log("Create offer", { sessionDescription });

          bind.pc?.setLocalDescription(
            sessionDescription,
            () => {
              const options = {
                peerid: bind.peerid,
                recording: `${bind.recording}`,
                videotrackid: +bind.videotrackid,
                audiotrackid: 0,
                sdp: sessionDescription.sdp,
              };

              bind.grpc.client
                .CallWebRTC(options, bind.grpc.meta)
                .toPromise()
                .then((response: any) =>
                  bind.onReceiveCall.call(bind, response)
                )
                .catch((error: any) => bind.onError("call " + error));
            },
            (error: any) => {
              this.log("setLocalDescription error", { error });
            }
          );
        },
        (error: any) => {
          alert("Create offer error:" + JSON.stringify(error));
        }
      );
    } catch (e) {
      this.disconnect();
      alert("connect error: " + e);
    }
  }

  onReceiveCall(dataJson: any) {
    const bind = this;
    this.log("onReceiveCall offer", { dataJson });
    const descr = new RTCSessionDescription({
      sdp: dataJson.sdp,
      type: "answer",
    });
    this.pc?.setRemoteDescription(
      descr,
      () => {
        this.log("setRemoteDescription ok");
        while (bind.earlyCandidates.length) {
          const candidate = bind.earlyCandidates.shift();
          bind.addIceCandidate.call(bind, bind.peerid, candidate!);
        }

        bind.getIceCandidate.call(bind);
      },
      (error: any) => {
        this.log("setRemoteDescription error", { error });
      }
    );
  }

  getIceCandidate() {
    this.grpc.client
      .GetIceCandidatesWebRTC(
        {
          peerid: this.peerid,
        },
        this.grpc.meta
      )
      .toPromise()
      .then((response) => {
        if (response) {
          this.onReceiveCandidate.call(this, JSON.parse(response!.peerlist));
        }
      })
      .catch((error: any) => this.onError("getIceCandidate " + error));
  }

  onReceiveCandidate(dataJson: any) {
    this.log("onReceiveCandidate", { dataJson });

    const pcAdd = (candidate?: RTCIceCandidateInit) => {
      this.pc!.addIceCandidate(candidate)
        .then(() => {
          this.log("addIceCandidate OK");
        })
        .catch((error: any) => {
          this.log("addIceCandidate ERROR", { error });
        });
    };

    if (dataJson) {
      for (let i = 0; i < dataJson.length; i++) {
        const candidate = new RTCIceCandidate(dataJson[i]);

        this.log("Adding ICE candidate", { candidate });
        pcAdd(candidate);
      }
      pcAdd();
    }
  }

  createPeerConnection() {
    if (!this.pcConfig) {
      throw new Error("Missing peer connection config");
    }

    this.pc = new RTCPeerConnection(this.pcConfig!);
    const pc = this.pc;
    this.peerid = `${Math.random() + 1}`.replace(".", "");

    const bind = this;

    if (pc.addTrack !== undefined) {
      pc.ontrack = (ev) => {
        ev.streams.forEach((stream) => this.onAddStream(stream));
      };
    } else {
      // @link https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addstream_event#examples
      // @ts-ignore
      pc.onaddstream = (ev) => {
        this.onAddStream(ev.stream);
      };
    }

    pc.onicecandidate = (evt: any) => {
      bind.onIceCandidate.call(bind, evt);
    };
    pc.oniceconnectionstatechange = (evt: any) => {
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
    pc.ondatachannel = (evt: any) => {
      this.log("remote datachannel created", { evt });

      evt.channel.onopen = function () {
        bind.log("remote datachannel open");
        this.send("remote channel opened");
      };
      evt.channel.onmessage = (event: any) => {
        this.log("remote datachannel recv", { event });
      };
    };
    pc.onicegatheringstatechange = () => {
      if (pc.iceGatheringState === "complete") {
        const receivers = pc.getReceivers();

        receivers.forEach((receiver: RTCRtpReceiver) => {
          if (receiver.track && receiver.track.kind === "video") {
            this.log(
              "onicegatheringstatechange codecs",
              receiver.getParameters().codecs
            );
          }
        });
      }
    };

    try {
      const dataChannel = pc.createDataChannel("ClientDataChannel");
      dataChannel.onopen = function () {
        bind.log("local datachannel open");
        this.send("local channel opened");
      };
      dataChannel.onmessage = function (evt: MessageEvent) {
        bind.log("local datachannel recv:", { data: evt.data });
      };
    } catch (e) {
      this.log("Cannot create datachannel error: " + e);
    }

    this.log("Created RTCPeerConnnection with config", {
      config: this.pcConfig,
    });
    return pc;
  }

  onIceCandidate(event: RTCPeerConnectionIceEvent) {
    this.log("onIceCandidate", { event });
    if (event.candidate) {
      if (this.pc?.currentRemoteDescription) {
        this.addIceCandidate(this.peerid, event.candidate);
      } else {
        this.earlyCandidates.push(event.candidate);
      }
    } else {
      this.log("End of candidates.");
    }
  }

  addIceCandidate(peerid: string, iceCandidiate?: RTCIceCandidate) {
    if (!iceCandidiate) {
      return;
    }

    const { candidate, sdpMid, sdpMLineIndex } = iceCandidiate;

    const addIceCandidatePayload: AddIceCandidateWebRTCRequest = {
      peerid: peerid,
      icecandidiate: JSON.stringify({ candidate, sdpMid, sdpMLineIndex }),
    };

    this.grpc.client
      .AddIceCandidateWebRTC(addIceCandidatePayload, this.grpc.meta)
      .toPromise()
      .then((response: any) => {
        this.log("addIceCandidate ok:", { response });
      })
      .catch((error: any) => this.onError("addIceCandidate " + error));
  }

  onAddStream(stream: MediaStream) {
    this.log("Remote track added, onAddStream", { stream });

    this.videoElement.srcObject = stream;
    this.videoElement
      .play()
      .then(() => {
        this.videoElement.controls = false;
        this.videoElement.style.opacity = "1.0";
      })
      .catch((error: any) => {
        console.warn("error:" + error);
      });
  }
}
