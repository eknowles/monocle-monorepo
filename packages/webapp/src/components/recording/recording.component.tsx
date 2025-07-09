import React, {
  FC,
  useEffect,
  useRef,
  PropsWithChildren,
  useState,
  useCallback,
} from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { SERVER_IP, STUN_SERVER_PORT, TIMELINE_HEIGHT } from "../../constants";
import useDimension from "../../hooks/use-dimensions";
import { useTrack } from "../../hooks/use-track";
import { RecordingTimeline } from "./recording-timeline.component";
import { WebRTC } from "./webrtc-class";
import { webrtcSlice } from "../../redux/modules/webrtc";
import { RootState } from "../../redux";

const SHOW_TIMELINE = import.meta.env.VITE_FEATURE_TIMELINE === "true";

export const Recording: FC<
  PropsWithChildren<{ recordingToken: string | number }>
> = ({ recordingToken }) => {
  const divRef = useRef(null);
  const { height, width } = useDimension(divRef);
  const videoEl = useRef<HTMLVideoElement>(null);
  const { activeTrack, activeTrackId, hasTracks } = useTrack(recordingToken);
  const dispatch = useDispatch();
  const peerId = useRef(`${Math.random() + 1}`.replace(".", ""));
  const [webRtc, setWebRtc] = useState<WebRTC | null>(null);
  const webrtcState = useSelector((state: RootState) => state.webrtc[peerId.current]);

  const onStream = useCallback((stream: MediaStream) => {
    if (videoEl.current) {
      videoEl.current.srcObject = stream;
      const playPromise = videoEl.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name !== "AbortError") {
            console.error("play error", error);
          }
        });
      }
    }
  }, []);

  const onDataChannel = useCallback((channel: RTCDataChannel) => {
    channel.onopen = () => {
      channel.send(JSON.stringify({ method: "live" }));
    };
  }, []);

  const onLocalDescription = useCallback(
    (description: RTCSessionDescriptionInit) => {
      dispatch(
        webrtcSlice.actions.localDescriptionCreated({
          peerId: peerId.current,
          description,
          recordingToken,
          videotrackid: parseInt(activeTrackId!, 10),
        })
      );
    },
    [dispatch, peerId, recordingToken, activeTrackId]
  );

  useEffect(() => {
    if (activeTrackId && videoEl.current) {
      const newWebRtc = new WebRTC({
        iceServers: [{ urls: `stun:${SERVER_IP}:${STUN_SERVER_PORT}` }],
        onLocalDescription,
        onStream,
        onDataChannel,
      });
      setWebRtc(newWebRtc);
      dispatch(webrtcSlice.actions.connecting({ peerId: peerId.current }));
      newWebRtc.createOffer();

      return () => {
        newWebRtc.close();
        dispatch(webrtcSlice.actions.disconnected({ peerId: peerId.current }));
      };
    }
  }, [
    recordingToken,
    activeTrackId,
    dispatch,
    onLocalDescription,
    onStream,
    onDataChannel,
  ]);

  useEffect(() => {
    if (webRtc && webrtcState?.remoteDescription) {
      webRtc.setRemoteDescription(webrtcState.remoteDescription);
    }
  }, [webRtc, webrtcState?.remoteDescription]);

  if (!hasTracks || !activeTrack) {
    return (
      <div className="dark:bg-code-900 bg-white dark:text-white w-full h-full dark:text-code-100 flex items-center justify-center">
        <span className="uppercase font-mono text-sm dark:bg-black px-1">
          <FormattedMessage
            id="no-track"
            description="when recording has no tracks"
            defaultMessage="No Recording Track"
          />
        </span>
      </div>
    );
  }

  return (
    <div
      ref={divRef}
      id="video"
      style={{
        height: SHOW_TIMELINE
          ? `calc(100% - ${TIMELINE_HEIGHT}px)`
          : "100%",
      }}
      className="dark:bg-code-900 bg-white dark:text-white w-full h-full flex flex-1 flex-col"
    >
      <video
        ref={videoEl}
        title={`${recordingToken}`}
        muted
        controls={true}
        autoPlay
        style={{
          height: `${height - (SHOW_TIMELINE ? TIMELINE_HEIGHT : 0)}px`,
          width: `${width}px`,
        }}
        className="object-contain dark:bg-code-900 bg-white transition-opacity duration-300 opacity-100 flex grow"
      />
      {import.meta.env.VITE_FEATURE_TIMELINE === "true" && (
        <RecordingTimeline
          onChangeTime={() => {}}
          recordingToken={recordingToken}
        />
      )}
    </div>
  );
};
