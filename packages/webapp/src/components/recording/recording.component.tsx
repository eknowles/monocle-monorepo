import { PlayRequest } from "@monocle/protobuf/generated/monocle";
import React, {
  FC,
  useEffect,
  useRef,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { GRPC_SERVER, HTTP_SERVER, TIMELINE_HEIGHT } from "../../constants";
import useDimension from "../../hooks/use-dimensions";
import { useTrack } from "../../hooks/use-track";
import { getServerAuthToken } from "../../redux/modules/server";
import { getClient } from "../../services/monocle";
import { RecordingTimeline } from "./recording-timeline.component";
import { WebRTC, WebRTCOptions } from "./webrtc-class";

export const Recording: FC<
  PropsWithChildren<{ recordingToken: string | number }>
> = ({ recordingToken }) => {
  const divRef = useRef(null);
  const { height, width } = useDimension(divRef);
  const videoEl = useRef<HTMLVideoElement>(null);
  const serverAuthToken = useSelector(getServerAuthToken);
  const { activeTrack, activeTrackId, hasTracks } = useTrack(recordingToken);

  const handleRequestedTime = (time: Date) => {
    if (activeTrackId) {
      const grpc = getClient({
        host: GRPC_SERVER,
        token: serverAuthToken as string,
      });
      const request: PlayRequest = {
        starttime: `${Math.floor(time.getTime() / 1000)}`,
        peerid: `${activeTrackId}`,
      };
      grpc.client.Play(request, grpc.meta).toPromise();
    }
  };

  useEffect(() => {
    let webRtcServer: any;
    if (videoEl.current && activeTrackId) {
      const grpc = getClient({
        host: GRPC_SERVER,
        token: serverAuthToken as string,
      });

      const options: WebRTCOptions = {
        videotrackid: activeTrackId,
        recording: recordingToken,
        videoElement: videoEl.current,
        srvurl: HTTP_SERVER,
        grpc,
      };

      webRtcServer = new WebRTC(options);

      webRtcServer.connect();
    }

    return () => {
      if (webRtcServer) {
        webRtcServer.disconnect();
      }
    };
  }, [recordingToken, activeTrackId]);

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

  // 36 px is the height of the tab bar so we need to take that off the calculation
  return (
    <div
      ref={divRef}
      id="video"
      style={{ height: "calc(100% - 36px)" }}
      className="dark:bg-code-900 bg-white dark:text-white w-full h-full flex flex-1 flex-col"
    >
      <video
        ref={videoEl}
        title={`${recordingToken}`}
        muted
        controls={true}
        style={{
          height: `${height - TIMELINE_HEIGHT}px`,
          width: `${width}px`,
        }}
        className="object-contain dark:bg-code-900 bg-white transition-opacity duration-300 opacity-0 flex grow"
      />
      <RecordingTimeline
        onChangeTime={handleRequestedTime}
        recordingToken={recordingToken}
      />
    </div>
  );
};
