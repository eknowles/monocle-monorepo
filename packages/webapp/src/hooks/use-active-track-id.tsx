import { useSelector } from "react-redux";
import { getRecordings, getServerAuthToken } from "../redux/modules/server";

export const useActiveTrackId = (
  recordingToken?: string | number
): undefined | number => {
  const recordings = useSelector(getRecordings);
  const currentRecording = (recordings || []).find(
    (recording) => recording.token === recordingToken
  );

  if (!recordingToken) return undefined;

  const activeTrackId =
    currentRecording &&
    currentRecording.jobs.length &&
    currentRecording.jobs
      .find((job) => job.recordingjobtoken === currentRecording.activejob)!
      .recordingjobsources.find(
        (source) => source.recordingjobsourcetracks.length === 1
      )!.recordingjobsourcetracks[0].recordingtrackid;

  return activeTrackId;
};
