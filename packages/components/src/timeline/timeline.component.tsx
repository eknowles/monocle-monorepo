import { createRef, useEffect, useState } from "react";
import type { FC } from "react";
import { useSelector } from "react-redux";
import { TimelineOptions } from "vis-timeline";
import { Timeline as VisTimeline } from "vis-timeline/esnext";
import { DateType } from "vis-timeline/types";
import type { TimelineItem } from "vis-timeline/types";
import "./timeline.css";

// Configuration for the Timeline
const defaultOptions: TimelineOptions = {
  width: "100%",
  height: "130px",
  minHeight: "130px",
  zoomMin: 1000 * 60 * 60 * 4,
  zoomMax: 1000 * 60 * 60 * 24 * 31 * 3, // about three months in milliseconds
  orientation: {
    item: "top",
  },
  rollingMode: {
    follow: true,
  },
};

export const Timeline: FC<{ items: TimelineItem[]; min: DateType }> = ({
  items,
  min,
}) => {
  const divRef = createRef<HTMLDivElement>();
  const [timeline, setTimeline] = useState<VisTimeline>();

  useEffect(() => {
    const d: any = divRef.current;
    if (d && !timeline) {
      const t = new VisTimeline(d, items, { ...defaultOptions, min });
      setTimeline(t);
    }
  }, [divRef, items, setTimeline, timeline, min]);

  return <div ref={divRef} />;
};
