import { Timeline } from "@monocle/components";
import { useParams } from "react-router-dom";
import { Recording } from "../../../components/recording";

export const RecordingRoute = () => {
  const { recordingToken } = useParams<{ recordingToken: string }>();

  return (
    <div>
      <Recording recordingToken={recordingToken as string} />
      <Timeline />
    </div>
  );
};
