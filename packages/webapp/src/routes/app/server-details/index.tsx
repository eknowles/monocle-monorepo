import type { FC } from "react";
import { ServerDetails } from "@monocle/components";
import { useSelector } from "react-redux";
import { getServerMeta } from "../../../redux/modules/server";

export const ServerDetailsRoute: FC = () => {
  const { version, name, architecture } = useSelector(getServerMeta);
  const versionString = `${version!.major}.${version!.minor}.${version!.build}`;

  if (!name || !architecture) return null;

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
