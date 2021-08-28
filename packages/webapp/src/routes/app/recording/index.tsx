import { FC, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useDimension from "../../../hooks/use-dimensions";
import { GRPC_SERVER, HTTP_SERVER } from "../../../constants";
import {
  getRecordings,
  getServerAuthToken,
} from "../../../redux/modules/server";
import { getClient } from "../../../services/monocle";

import WebRtcStreamer from "./webrtc";

export const RecordingRoute: FC = () => {
  const { recordingToken } = useParams<any>();
  const divRef = useRef(null);
  const { height, width } = useDimension(divRef);
  const videoEl = useRef<HTMLVideoElement>(null);
  const serverAuthToken = useSelector(getServerAuthToken);
  const recordings = useSelector(getRecordings);
  const currentRecording = (recordings || []).find(
    (recording) => recording.token === recordingToken
  );

  const activeTrackId =
    currentRecording &&
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

  return (
    <div
      ref={divRef}
      id="video"
      className="dark:bg-code-900 dark:text-white bg-white w-full h-full"
    >
      <video
        ref={videoEl}
        title={recordingToken}
        muted
        controls={true}
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
        className="object-contain"
      />
    </div>
  );
};
