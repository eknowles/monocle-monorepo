import { useMemo } from "react";
import { TimelineGroup, TimelineItem } from "vis-timeline";
import { useTrack } from "./use-track";

export const useTimeline = (recordingToken: number | string) => {
  const { activeTrack } = useTrack(recordingToken);
  const timelineItems = useMemo<TimelineItem[]>(() => {
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

  return {
    groups,
    timelineItems,
    minimumTimelineTime,
  };
};
