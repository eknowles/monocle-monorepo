import { Side, SideSection } from '@monocle/components';
import React, { useEffect, useState } from 'react';
import { useMonocleState } from '../../services/monocle/use-monocle';
import { ServerListItem } from './server-list-item';
import { SideViewItem } from './side-view-item';

export const SideNav = () => {
  const { state } = useMonocleState();
  const [servers, setServers] = useState<any[]>([]);
  const [views, setViews] = useState([
    { id: '1', name: 'Default View', active: false },
  ]);

  useEffect(() => {
    if (state) {
      setServers([{ id: state.identifier, name: state.name }]);
    }
  }, [state]);

  return (
    <Side>
      <SideSection label="Views" />
      {views.map((view) => (
        <SideViewItem key={view.id} id={view.id} name={view.name} />
      ))}
      <SideSection label="Servers" />
      {servers.map((server) => (
        <ServerListItem key={server.id} id={server.id} name={server.name} />
      ))}
    </Side>
  );
};
