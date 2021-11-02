import React, { FC, useLayoutEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { GRPC_SERVER, HTTP_SERVER } from "../../constants";
import useDimension from "../../hooks/use-dimensions";
import { getRecordings } from "../../redux/modules/server";
import { getServerAuthToken } from "../../redux/modules/server";
import { getClient } from "../../services/monocle";

import WebRtcStreamer from "./webrtc";

export const Recording: FC<{ recordingToken: string | number }> = ({
  recordingToken,
}) => {
  const divRef = useRef(null);
  const { height, width } = useDimension(divRef);
  const videoEl = useRef<HTMLVideoElement>(null);
  const serverAuthToken = useSelector(getServerAuthToken);
  const recordings = useSelector(getRecordings);
  const currentRecording = (recordings || []).find(
    (recording) => recording.token === recordingToken
  );
  const hasTracks = (currentRecording?.tracks ?? []).length > 0;

  const activeTrackId =
    currentRecording &&
    currentRecording.jobs.length &&
    currentRecording.jobs
      .find((job) => job.recordingjobtoken === currentRecording.activejob)!
      .recordingjobsources.find(
        (source) => source.recordingjobsourcetracks.length === 1
      )!.recordingjobsourcetracks[0].recordingtrackid;

  useLayoutEffect(() => {
    let webRtcServer: any;
    if (videoEl.current && activeTrackId) {
      const grpc = getClient({
        host: GRPC_SERVER,
        token: serverAuthToken as string,
      });

      // @ts-ignore
      webRtcServer = new WebRtcStreamer(
        grpc,
        videoEl.current,
        HTTP_SERVER,
        recordingToken,
        activeTrackId
      );

      webRtcServer.connect();
    }

    return () => {
      if (webRtcServer) {
        webRtcServer.disconnect();
      }
    };
  }, [recordingToken, activeTrackId]);

  if (!hasTracks) {
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
      className="dark:bg-code-900 bg-white dark:text-white w-full h-full"
    >
      <video
        ref={videoEl}
        title={`${recordingToken}`}
        muted
        controls={true}
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
        className="object-contain dark:bg-code-900 bg-white"
      />
    </div>
  );
};
