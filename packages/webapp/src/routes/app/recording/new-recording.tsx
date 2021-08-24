import { FC, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GRPC_SERVER } from "../../../constants";
import {
  getRecordings,
  getServerAuthToken,
} from "../../../redux/modules/server";
import { hangUp } from "../../../redux/modules/view";
import { getClient } from "../../../services/monocle";

import WebRtcStreamer from "./webrtc";

export const RecordingRoute: FC = () => {
  const { recordingToken } = useParams<any>();
  const [visible, setVisible] = useState(false);
  const [server, setServer] = useState(null);
  const videoEl = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch();
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
  console.log(activeTrackId);

  useLayoutEffect(() => {
    if (videoEl.current) {
      const grpc = getClient({
        host: GRPC_SERVER,
        token: serverAuthToken as string,
      });

      console.log(videoEl.current);

      // @ts-ignore
      const webRtcServer = new WebRtcStreamer(
        grpc,
        videoEl.current,
        "http://151.80.44.148:9854",
        recordingToken,
        activeTrackId
      );

      webRtcServer.connect(
        recordingToken,
        undefined,
        "rtptransport=tcp&timeout=60"
      );

      setServer(webRtcServer);
    }

    return () => {
      if (server) {
        server.disconnect();
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
        className={`w-full flex-1 bg-code-900 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
