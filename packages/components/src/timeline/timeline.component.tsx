import { createRef, useLayoutEffect, useState } from "react";
import type { FC } from "react";
import { TimelineOptions } from "vis-timeline";
import { Timeline as VisTimeline } from "vis-timeline/esnext";
import { DateType, TimelineGroup } from "vis-timeline/types";
import type { TimelineItem } from "vis-timeline/types";
import "./timeline.css";

const TIMELINE_HEIGHT = 130

// Configuration for the Timeline
const defaultOptions: TimelineOptions = {
  width: "100%",
  height: `${TIMELINE_HEIGHT}px`,
  minHeight: `${TIMELINE_HEIGHT}px`,
  zoomMin: 1000 * 60 * 1,
  zoomMax: 1000 * 60 * 60 * 24 * 31 * 3, // about three months in milliseconds
  orientation: {
    axis: "top",
    item: "top",
  },
  rollingMode: {
    follow: true,
  },
  margin: {
    axis: 0,
  },
};

const PLAYBACK_TIME_ID = "playback";

export const Timeline: FC<{
  onTimeChange: (time: Date) => void;
  groups: TimelineGroup[];
  items: TimelineItem[];
  min: DateType;
}> = ({ onTimeChange, groups, items, min }) => {
  const divRef = createRef<HTMLDivElement>();
  const [timeline, setTimeline] = useState<VisTimeline>();

  useLayoutEffect(() => {
    const d: any = divRef.current;
    if (d && !timeline) {
      const t = new VisTimeline(d, items, groups, { ...defaultOptions, min });

      // todo move this out somewhere
      t.on("doubleClick", function (props) {
        props.event.preventDefault();

        if (props.time > t.getCurrentTime()) {
          return;
        }

        try {
          t.setCustomTime(props.time, PLAYBACK_TIME_ID);
        } catch (e) {
          t.addCustomTime(props.time, PLAYBACK_TIME_ID);
        }

        // debug
        console.log(props.time);

        onTimeChange(props.time);
        t.moveTo(props.time);
      });

      t.on("timechanged", function ({ id, time }) {
        // todo check for future time

        if (id === PLAYBACK_TIME_ID) {
          // debug
          console.log(time);

          onTimeChange(time);
          t.moveTo(time);
        }
      });

      setTimeline(t);
    }
  }, [divRef, items, setTimeline, timeline, min]);

  return <div ref={divRef} />;
};
