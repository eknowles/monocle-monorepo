import { FC, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GRPC_SERVER } from "../../../constants";
import {
  getRecordings,
  getServerAuthToken,
} from "../../../redux/modules/server";
import { getClient } from "../../../services/monocle";

import WebRtcStreamer from "./webrtc";

export const RecordingRoute: FC = () => {
  const { recordingToken } = useParams<any>();
  const videoEl = useRef<HTMLVideoElement>(null);
  const serverAuthToken = useSelector(getServerAuthToken);
  const recordings = useSelector(getRecordings);
  const currentRecording = (recordings || []).find(
    (recording) => recording.token === recordingToken
  );

  if (!currentRecording) {
    return null;
  }

  const activeTrackId = currentRecording.jobs
    .find((job) => job.recordingjobtoken === currentRecording.activejob)!
    .recordingjobsources.find(
      (source) => source.recordingjobsourcetracks.length === 1
    )!.recordingjobsourcetracks[0].recordingtrackid;

  useLayoutEffect(() => {
    let webRtcServer: any;
    if (videoEl.current) {
      const grpc = getClient({
        host: GRPC_SERVER,
        token: serverAuthToken as string,
      });

      console.log(videoEl.current);

      // @ts-ignore
      webRtcServer = new WebRtcStreamer(
        grpc,
        videoEl.current,
        "http://151.80.44.148:9854",
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
  }, []);

  return (
    <div className="flex w-full h-full dark:bg-code-900 dark:text-white">
      <video
        ref={videoEl}
        title={recordingToken}
        muted
        controls
        playsInline
        className={`w-full flex-1 bg-code-900`}
      />
    </div>
  );
};
