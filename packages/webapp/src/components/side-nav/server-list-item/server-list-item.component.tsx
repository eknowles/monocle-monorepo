import type { FC, PropsWithChildren } from "react";
import ServerIcon from "@monocle/icons/src/server.svg";
import { SideNavItem } from "@monocle/components";

interface IServerListItemProps {
  id: string | number;
  name: string;
}

export const ServerListItem: FC<PropsWithChildren<IServerListItemProps>> = ({ name, id }) => {
  const path = `/app/server/${id}`;
  return (
    <SideNavItem
      path={path}
      state={{
        setTab: { path, name, icon: "server", params: { serverId: id } },
      }}
    >
      <ServerIcon width="14" height="14" className="mr-1 text-code-200" />
      {name}
    </SideNavItem>
  );
};
