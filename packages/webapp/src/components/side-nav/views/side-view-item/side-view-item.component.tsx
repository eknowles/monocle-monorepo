import type { FC } from "react";
import GridIcon from "@monocle/icons/src/grid.svg";
import { SideNavItem } from "@monocle/components";

interface ISideViewItemProps {
  id: string | number;
  name: string;
}

export const SideViewItem: FC<ISideViewItemProps> = ({ name, id }) => {
  const path = `/app/view/${id}`;
  return (
    <SideNavItem
      path={path}
      state={{ setTab: { path, name, icon: "view", params: { viewId: id } } }}
    >
      <GridIcon width="14" height="14" className="mr-1 text-code-200" />
      {name}
    </SideNavItem>
  );
};
