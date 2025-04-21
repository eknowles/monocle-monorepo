import { useSelector } from "react-redux";
import { getRecordings, getServerAuthToken } from "../redux/modules/server";

export const useActiveTrackId = (
  recordingToken?: string | number
): undefined | string => {
  const recordings = useSelector(getRecordings);
  const currentRecording = (recordings || []).find(
    (recording) => recording.token === recordingToken
  );

  if (!recordingToken) return undefined;

  const activeTrackId =
    currentRecording &&
    currentRecording.jobs.length &&
    currentRecording.jobs
      .find((job) => job.token === currentRecording.activeJob)!
      .sources.find(
        (source) => source.sourceTracks.length === 1
      )!.sourceTracks[0].trackid;

  return activeTrackId ? String(activeTrackId) : undefined;
};
