import type { FC } from 'react';
import { ServerDetails } from '@monocle/components';
import { useMonocleState } from '../../../services/monocle/use-monocle';

export const ServerDetailsRoute: FC = () => {
  const { state } = useMonocleState();

  if (!state) {
    return null;
  }

  const { version, name, architecture } = state;
  const versionString = `${version!.major}.${version!.minor}.${version!.build}`;

  return (
    <div className="flex w-full h-full">
      <ServerDetails
        name={name}
        architecture={architecture}
        version={versionString}
      />
    </div>
  );
};
