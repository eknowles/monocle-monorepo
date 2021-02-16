import type { FC } from 'react';
import ServerIcon from '@monocle/icons/src/server.svg';
import { SideNavItem } from '@monocle/components';

interface IServerListItemProps {
  id: string | number;
  name: string;
}

export const ServerListItem: FC<IServerListItemProps> = ({ name, id }) => {
  const path = `/app/server/${id}`;
  return (
    <SideNavItem
      path={path}
      exact={true}
      state={{ setTab: { path, name, icon: 'server', id } }}
    >
      <ServerIcon width="14" height="14" className="mr-1 text-code-200" />
      {name}
    </SideNavItem>
  );
};
