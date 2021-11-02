import { Form } from "formik";
import type { FC } from "react";
import { useIntl } from "react-intl";
import { Button } from "../button";
import { Field } from "../field";

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
}) => {
  const intl = useIntl();
  return (
    <div className="p-4">
      <Metric
        label={intl.formatMessage({
          id: "c-sdm-sname",
          description: "server detail header Server Name",
          defaultMessage: "Server Name",
        })}
        value={name}
      />
      <Metric
        label={intl.formatMessage({
          id: "c-sdm-arch",
          description: "server detail header Architecture",
          defaultMessage: "Architecture",
        })}
        value={architecture}
      />
      <Metric
        label={intl.formatMessage({
          id: "c-sdm-vrs",
          description: "server detail header Version",
          defaultMessage: "Version",
        })}
        value={version}
      />
    </div>
  );
};
