import { useParams } from "react-router-dom";
import { Recording } from "../../../components/recording";

export const RecordingRoute = () => {
  const { recordingToken } = useParams<any>();

  return <Recording recordingToken={recordingToken} />;
};
