import { ServerListItem } from '@monocle/components';
import React, { FC } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const SideServerItem: FC<{ name: string; id: number }> = ({
  name,
  id,
}) => {
  const history = useHistory();
  const match = useRouteMatch({
    path: `/app/server/${id}`,
    exact: true,
  });

  return (
    <ServerListItem
      isActive={!!match && match.isExact}
      name={name}
      onClick={() =>
        history.push(`/app/server/${id}`, {
          setTab: { icon: 'server', name, id },
        })
      }
    />
  );
};
