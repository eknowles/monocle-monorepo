export type WebRTCOptions = {
  iceServers: RTCConfiguration["iceServers"];
  onLocalDescription: (description: RTCSessionDescriptionInit) => void;
  onStream: (stream: MediaStream) => void;
  onDataChannel: (dataChannel: RTCDataChannel) => void;
};

export class WebRTC {
  private pc: RTCPeerConnection;

  constructor(private options: WebRTCOptions) {
    const { onStream, onDataChannel, iceServers } = options;
    this.pc = new RTCPeerConnection({ iceServers });
    this.pc.ontrack = (event) => onStream(event.streams[0]);
    this.pc.addTransceiver('video', { direction: 'recvonly' });
    this.pc.addTransceiver('audio', { direction: 'recvonly' });
    this.pc.ondatachannel = (event) => onDataChannel(event.channel);
    this.pc.onicecandidate = this.onIceCandidate;
    this.pc.createDataChannel("ClientDataChannel");
  }

  private onIceCandidate = (event: RTCPeerConnectionIceEvent) => {
    if (!event.candidate) {
      this.options.onLocalDescription(this.pc.localDescription!.toJSON());
    }
  };

  public async createOffer() {
    try {
      const offer = await this.pc.createOffer({
        voiceActivityDetection: false,
        offerToReceiveAudio: true,
        offerToReceiveVideo: true,
      });
      await this.pc.setLocalDescription(offer);
    } catch (error) {
      console.error("createOffer error", error);
    }
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
