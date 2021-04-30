import { Side, SideSection } from '@monocle/components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getServerListItem } from '../../redux/modules/server';
import { viewsSelectors } from '../../redux/modules/view';
import { ServerListItem } from './server-list-item';
import { SideViewItem } from './side-view-item';

export const SideNav = () => {
  const { id, name } = useSelector(getServerListItem);
  const views = useSelector(viewsSelectors.selectAll);

  return (
    <Side>
      <SideSection label="Views" />
      {views.map((view) => (
        <SideViewItem key={view.id} id={view.id} name={view.name} />
      ))}
      <SideSection label="Servers" />
      {id && <ServerListItem key={id} id={id} name={name} />}
    </Side>
  );
};
