import React, {
  FC,
  useEffect,
  useRef,
  PropsWithChildren,
  useState,
} from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { SERVER_IP, STUN_SERVER_PORT, TIMELINE_HEIGHT } from "../../constants";
import useDimension from "../../hooks/use-dimensions";
import { useTrack } from "../../hooks/use-track";
import { getServerAuthToken } from "../../redux/modules/server";
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

  useEffect(() => {
    if (activeTrackId && videoEl.current) {
      dispatch(webrtcSlice.actions.connecting({ peerId: peerId.current }));
      const newWebRtc = new WebRTC({
        iceServers: [{ urls: `stun:${SERVER_IP}:${STUN_SERVER_PORT}` }],
        onLocalDescription: (description) => {
          dispatch(
            webrtcSlice.actions.localDescriptionCreated({
              peerId: peerId.current,
              description,
              recordingToken,
              videotrackid: parseInt(activeTrackId, 10),
            })
          );
        },
        onStream: (stream) => {
          if (videoEl.current) {
            videoEl.current.srcObject = stream;
            videoEl.current.play().catch((e) => console.error("play error", e));
          }
        },
        onDataChannel: (channel) => {
          channel.onopen = () => {
            channel.send(JSON.stringify({ method: "live" }));
          };
          channel.onmessage = (event) => {
            if (event.data === "Ping") {
              // channel.send("Pong");
            }
          };
        },
      });
      setWebRtc(newWebRtc);
      newWebRtc.createOffer();

      return () => {
        newWebRtc.close();
        dispatch(webrtcSlice.actions.disconnected({ peerId: peerId.current }));
      };
    }
  }, [recordingToken, activeTrackId, dispatch]);

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
      style={{ height: SHOW_TIMELINE ? `calc(100% - 36px)` : "100%" }}
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
