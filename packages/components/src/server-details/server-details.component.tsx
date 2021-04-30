import type { FC } from 'react';

interface IServerDetailsProps {
  name: string;
  architecture: string;
  version: string;
}

const Metric: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <div className="tracking-tight text-xs dark:text-code-400 uppercase">
      {label}
    </div>
    <div className="font-bold tracking-tight text-2xl dark:text-gray-100 mb-6">
      {value}
    </div>
  </div>
);

export const ServerDetails: FC<IServerDetailsProps> = ({
  name,
  architecture,
  version,
}) => (
  <div className="h-full w-full dark:bg-code-900 p-4">
    <div className="">
      <Metric label="Server Name" value={name} />
      <Metric label="Architecture" value={architecture} />
      <Metric label="Version" value={version} />
    </div>
  </div>
);
