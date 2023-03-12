import { useEffect, useMemo, useState } from "react";
import { TimelineGroup, TimelineItem } from "vis-timeline";
import { useTrack } from "./use-track";

type TimelineHookReturn = {
  min: number;
  groups: TimelineGroup[];
  items: TimelineItem[];
};

export const useTimeline = (
  recordingToken: number | string
): TimelineHookReturn => {
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

  const min = useMemo(() => {
    // @ts-ignore
    return Math.min(...timelineItems.map((t) => t.start));
  }, [timelineItems]);

  return {
    groups: [
      {
        id: activeTrack!.recordingtrackid,
        content: activeTrack!.description,
        title: activeTrack!.description,
      },
    ],
    items: timelineItems,
    min,
  };
};
