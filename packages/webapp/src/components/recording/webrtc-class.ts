export type WebRTCOptions = {
  iceServers: RTCConfiguration["iceServers"];
  onLocalDescription: (description: RTCSessionDescriptionInit) => void;
  onStream: (stream: MediaStream) => void;
  onDataChannel: (dataChannel: RTCDataChannel) => void;
};

export class WebRTC {
  private pc: RTCPeerConnection;

  constructor(private options: WebRTCOptions) {
    this.pc = new RTCPeerConnection({ iceServers: this.options.iceServers });
    this.pc.ontrack = this.onTrack;
    this.pc.onicecandidate = this.onIceCandidate;
    this.pc.ondatachannel = this.onDataChannel;
    this.pc.createDataChannel("ClientDataChannel");
  }

  private onTrack = (event: RTCTrackEvent) => {
    this.options.onStream(event.streams[0]);
  };

  private onIceCandidate = (event: RTCPeerConnectionIceEvent) => {
    if (!event.candidate) {
      this.options.onLocalDescription(this.pc.localDescription!.toJSON());
    }
  };

  private onDataChannel = (event: RTCDataChannelEvent) => {
    this.options.onDataChannel(event.channel);
  };

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
