import { FC, RefObject, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GRPC_SERVER } from '../../constants';
import { getRecordings, getServerAuthToken } from '../../redux/modules/server';
import { hangUp } from '../../redux/modules/view';
import { getClient } from './index';

export const useRecordingStream = ({ recordingToken, videoEl }: any) => {
  const dispatch = useDispatch();
  const serverAuthToken = useSelector(getServerAuthToken);
  const recordings = useSelector(getRecordings);
  const currentRecording = (recordings || []).find((recording) => recording.token === recordingToken);

  if (!currentRecording) {
    return null;
  }

  const activeTrackId = currentRecording.jobs
    .find((job) => job.recordingjobtoken === currentRecording.activejob)!
    .recordingjobsources.find((source) => source.recordingjobsourcetracks.length === 1)!.recordingjobsourcetracks[0]
    .recordingtrackid;

  useEffect(() => {
    let pc: RTCPeerConnection;
    let peerid: string;
    const grpc = getClient({ host: GRPC_SERVER, token: serverAuthToken as string });
    const setupWebRTC = async () => {
      // create peer connection
      pc = new RTCPeerConnection({
        iceServers: [
          {
            urls: ['stun:82.12.81.9:3478'],
          },
        ],
      });

      // events
      pc.onicegatheringstatechange = () => {
        // console.info(`onicegatheringstatechange`, pc.iceGatheringState);
        if (pc.iceGatheringState === 'complete') {
          const receivers = pc.getReceivers();

          receivers.forEach((recv) => {
            if (recv.track && recv.track.kind === 'video') {
              // console.log(recv);
              // console.log('codecs:' + JSON.stringify(recv.getParameters().codecs));
            }
          });
        }
      };
      pc.oniceconnectionstatechange = (_event) => {
        // console.info(`oniceconnectionstatechange`, pc.iceConnectionState);
        if (videoEl.current) {
          if (pc.iceConnectionState === 'connected') {
            videoEl.current.style.opacity = '1.0';
          } else if (pc.iceConnectionState === 'disconnected') {
            videoEl.current.style.opacity = '0.25';
          } else if (pc.iceConnectionState === 'failed' || pc.iceConnectionState === 'closed') {
            videoEl.current.style.opacity = '0.5';
          } else if (pc.iceConnectionState === 'new') {
            getIceCandidate();
          }
        }
      };
      pc.onsignalingstatechange = (_event) => {
        // console.info(`onsignalingstatechange`, pc.signalingState);
      };
      pc.ontrack = (event) => {
        console.info(`ontrack`, event.streams);
        if (event.streams && videoEl.current) {
          videoEl.current.srcObject = event.streams[0];
          videoEl.current.controls = true;
          videoEl.current.play().catch();
        }
      };

      const getIceCandidate = async () => {
        const dataJson = await grpc.client.GetIceCandidatesWebRTC({ peerid }, grpc.meta).toPromise();
        // console.log(dataJson);
      };

      // setup
      try {
        const dataChannel = pc.createDataChannel('ClientDataChannel');
        dataChannel.onopen = function () {
          // console.log('local datachannel open');
          this.send('local channel opened');
        };
        dataChannel.onmessage = function (evt) {
          // console.log('local datachannel recv:' + JSON.stringify(evt.data));
        };
      } catch (e) {
        // console.log('Can not create datachannel error: ' + e);
      }

      try {
        const localDescription = await pc.createOffer({
          offerToReceiveVideo: true,
          offerToReceiveAudio: true,
          iceRestart: false,
        });

        // set local
        await pc.setLocalDescription(localDescription);

        // call webrtc via grpc
        const callWebRTCResponse = await grpc.client
          .CallWebRTC(
            {
              recording: recordingToken,
              videotrackid: activeTrackId,
              audiotrackid: 0,
              sdp: localDescription.sdp,
            },
            grpc.meta,
          )
          .toPromise();

        // set peer id for hangup
        peerid = callWebRTCResponse.peerid;

        const description = new RTCSessionDescription({ sdp: callWebRTCResponse.sdp, type: 'answer' });

        await pc.setRemoteDescription({ sdp: callWebRTCResponse.sdp, type: 'answer' });
      } catch (e) {
        // console.error(e);

        if (videoEl.current) {
          videoEl.current!.pause();
        }
      }
    };

    if (serverAuthToken && activeTrackId) {
      setupWebRTC().catch((e) => {
        // console.error(e);
      });
    }

    return () => {
      if (videoEl.current) {
        videoEl.current!.pause();
      }

      dispatch(hangUp({ peerid }));

      if (pc) {
        pc.close();
      }
    };
  }, [recordingToken, serverAuthToken, activeTrackId]);
};
