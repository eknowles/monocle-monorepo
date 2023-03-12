import { Timeline } from "@monocle/components";
import React, { FC, PropsWithChildren } from "react";
import { useTimeline } from "../../hooks/use-timeline";

type RecordingTimelineProps = {
  recordingToken: number | string;
  onChangeTime: (time: Date) => void;
};

export const RecordingTimeline: FC<
  PropsWithChildren<RecordingTimelineProps>
> = ({ recordingToken, onChangeTime }) => {
  const { groups, items, min } = useTimeline(recordingToken);

  return (
    <Timeline
      onTimeChange={onChangeTime}
      min={min}
      items={items}
      groups={groups}
    />
  );
};
