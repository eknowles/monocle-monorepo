import { useEffect } from "react";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { AppTabs } from "../../components/app-tabs";
import { SideNav } from "../../components/side-nav";
import { GRPC_SERVER } from "../../constants";
import {
  getAuthStatus,
  getServerAuthToken,
  serverSlice,
} from "../../redux/modules/server";
import { RecordingRoute } from "./recording";
import { ServerDetailsRoute } from "./server-details";
import { ViewRoute } from "./view";

const AppRoute: FC = () => {
  const serverAuthToken = useSelector(getServerAuthToken);
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authStatus && serverAuthToken) {
      const { protocol, hostname } = window.location;
      dispatch(
        serverSlice.actions.authSuccess({
          host: GRPC_SERVER,
          token: serverAuthToken,
        })
      );
    }
  }, [serverAuthToken, authStatus, dispatch]);

  return (
    <div className="flex h-full">
      <SideNav />
      <div className="flex flex-col w-full h-full">
        <AppTabs />
        <Switch>
          <Route
            component={ServerDetailsRoute}
            exact
            path="/app/server/:serverId"
          />
          <Route
            component={RecordingRoute}
            exact
            path="/app/recording/:recordingToken"
          />
          <Route component={ViewRoute} exact path="/app/view/:viewId" />
        </Switch>
      </div>
    </div>
  );
};

export default AppRoute;
