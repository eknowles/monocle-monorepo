import { ServerDetails } from "@monocle/components";
import { useSelector } from "react-redux";
import { getServerMeta } from "../../../redux/modules/server";

export const DetailsRoute = () => {
  const { version, architecture, name } = useSelector(getServerMeta);
  if (!name || !architecture || !version) return null;

  return (
    <ServerDetails
      name={name}
      architecture={architecture}
      version={version}
    />
  );
};

DetailsRoute.title = "Details";
