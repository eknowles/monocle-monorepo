import type { FC } from "react";

export type IServerDetailsProps = {
  name: string;
  architecture: string;
  version: string;
};

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
  <div className="p-4">
    <Metric label="Server Name" value={name} />
    <Metric label="Architecture" value={architecture} />
    <Metric label="Version" value={version} />
  </div>
);
