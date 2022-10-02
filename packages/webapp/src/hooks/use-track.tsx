import { useSelector } from "react-redux";
import { getRecordings } from "../redux/modules/server";
import { useActiveTrackId } from "./use-active-track-id";

export const useTrack = (recordingToken: number | string) => {
  const activeTrackId = useActiveTrackId(recordingToken);
  const recordings = useSelector(getRecordings);
  const currentRecording = (recordings || []).find(
    (recording) => recording.token === recordingToken
  );
  const hasTracks = (currentRecording?.tracks ?? []).length > 0;
  const activeTrack = currentRecording?.tracks!.find(
    (track) => track.recordingtrackid === activeTrackId
  );

  return {
    hasTracks,
    activeTrack,
    activeTrackId,
  };
};
