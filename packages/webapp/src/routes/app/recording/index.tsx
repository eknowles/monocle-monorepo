import { FC, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecordingStream } from '../../../services/monocle/use-recording-stream';

export const RecordingRoute: FC = () => {
  const { recordingToken } = useParams<any>();
  const videoEl = useRef<HTMLVideoElement>(null);
  useRecordingStream({ recordingToken, videoEl });

  return (
    <div className="flex w-full h-full dark:bg-code-900 dark:text-white">
      <video ref={videoEl} className="w-full flex-1 bg-code-900" />
    </div>
  );
};
