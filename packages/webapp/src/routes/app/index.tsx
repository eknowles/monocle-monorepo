import type { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppTabs } from '../../components/app-tabs';
import { SideNav } from '../../components/side-nav';
import { RecordingRoute } from './recording';
import { ServerDetailsRoute } from './server-details';
import { ViewRoute } from './view';

const AppRoute: FC = () => {
  return (
    <div className="flex h-full">
      <SideNav />
      <div className="flex flex-col w-full h-full">
        <AppTabs />
        <Switch>
          <Route component={ServerDetailsRoute} exact path="/app/server/:serverId" />
          <Route component={RecordingRoute} exact path="/app/recording/:recordingToken" />
          <Route component={ViewRoute} exact path="/app/view/:viewId" />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoute;
