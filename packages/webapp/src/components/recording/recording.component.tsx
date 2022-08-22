import { Timeline } from "@monocle/components";
import React, {
  FC,
  useLayoutEffect,
  useRef,
  PropsWithChildren,
  useMemo,
} from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { TimelineGroup } from "vis-timeline";
import type { TimelineItem } from "vis-timeline";
import { GRPC_SERVER, HTTP_SERVER, TIMELINE_HEIGHT } from "../../constants";
import useDimension from "../../hooks/use-dimensions";
import { getRecordings } from "../../redux/modules/server";
import { getServerAuthToken } from "../../redux/modules/server";
import { getClient } from "../../services/monocle";
import WebRtcStreamer from "./webrtc";

export const Recording: FC<
  PropsWithChildren<{ recordingToken: string | number }>
> = ({ recordingToken }) => {
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

  const activeTrack = currentRecording?.tracks!.find(
    (track) => track.recordingtrackid === activeTrackId
  );

  const timelineItems = useMemo<TimelineItem[]>(() => {
    const now = new Date().getTime();
    if (!activeTrack) return [];
    const items = (activeTrack.indices || []).map<TimelineItem>(
      (trackIndex, i) => ({
        id: i,
        content: i.toString(),
        start: trackIndex.starttime,
        end: trackIndex.endtime,
        type: "background",
        group: activeTrack.recordingtrackid,
      })
    );
    return items;
  }, [activeTrack]);

  const groups: TimelineGroup[] = [];

  const minimumTimelineTime = useMemo(() => {
    // @ts-ignore
    return Math.min(...timelineItems.map((t) => t.start));
  }, [timelineItems]);

  const handleRequestedTime = (time: Date) => {};

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

  groups.push({
    id: activeTrack.recordingtrackid,
    content: activeTrack.description,
    title: activeTrack.description,
  });

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
      <Timeline
        onTimeChange={handleRequestedTime}
        min={minimumTimelineTime}
        items={timelineItems}
        groups={groups}
      />
    </div>
  );
};
