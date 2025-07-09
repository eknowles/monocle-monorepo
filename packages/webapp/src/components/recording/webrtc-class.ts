export type WebRTCOptions = {
  iceServers: RTCConfiguration["iceServers"];
  onLocalDescription: (description: RTCSessionDescriptionInit) => void;
  onStream: (stream: MediaStream) => void;
};

export class WebRTC {
  private pc: RTCPeerConnection;

  constructor(private options: WebRTCOptions) {
    this.pc = new RTCPeerConnection({ iceServers: this.options.iceServers });
    this.pc.ontrack = (event) => this.options.onStream(event.streams[0]);
    this.pc.onicecandidate = (event) => {
      if (!event.candidate) {
        this.options.onLocalDescription(this.pc.localDescription!);
      }
    };
    this.pc.createDataChannel("ClientDataChannel");
  }

  public async createOffer() {
    const offer = await this.pc.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
    });
    await this.pc.setLocalDescription(offer);
  }

  public async setRemoteDescription(description: RTCSessionDescriptionInit) {
    await this.pc.setRemoteDescription(description);
  }

  public async addIceCandidate(candidate: RTCIceCandidateInit) {
    await this.pc.addIceCandidate(candidate);
  }

  public close() {
    this.pc.close();
  }
}
