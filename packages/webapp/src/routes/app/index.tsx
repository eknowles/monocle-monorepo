import {
  PageTabBar,
  ServerListItem,
  Side,
  SideSection,
  SideViewItem,
} from '@monocle/components';
import type { FC } from 'react';
import React, { useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { SideServerItem } from '../../components/SideServerItem';
import { useMonocleState } from '../../services/monocle/use-monocle';
import { usePageTabs } from '../../services/page-tabs/use-page-tabs';
import { ServerDetailsRoute } from './server-details';

const AppRoute: FC = () => {
  const [views, setViews] = useState([
    { id: '1', name: 'Default View', active: false },
  ]);
  const { state } = useMonocleState();

  const recordings =
    state &&
    state.recordingsList.map((recording) => {
      recording.activejob;
    });

  return (
    <div className="flex h-full">
      <Side>
        <SideSection label="Views" />
        {views.map((view) => (
          <SideViewItem isActive={view.active} name={view.name} key={view.id} />
        ))}
        <SideSection label="Servers" />
        {state && <SideServerItem id={state.identifier} name={state?.name} />}
      </Side>
      <div className="flex flex-col w-full h-full">
        <PageTabBar />
        <Switch>
          <Route
            component={ServerDetailsRoute}
            exact
            path="/app/server/:serverId"
          />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoute;
