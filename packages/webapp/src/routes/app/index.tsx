import { useEffect, PropsWithChildren } from "react";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { AppTabs } from "../../components/app-tabs";
import { SideNav } from "../../components/side-nav";
import { GRPC_SERVER } from "../../constants";
import {
  getAuthStatus,
  getServerAuthToken,
  serverSlice,
} from "../../redux/modules/server";

const AppRoute: FC<PropsWithChildren> = () => {
  const serverAuthToken = useSelector(getServerAuthToken);
  const authStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStatus && serverAuthToken) {
      dispatch(
        serverSlice.actions.authSuccess({
          host: GRPC_SERVER,
          token: serverAuthToken,
        })
      );
    }
    if (authStatus && !serverAuthToken) {
      navigate('/login');
    }
  }, [serverAuthToken, authStatus, dispatch]);

  return (
    <div className="flex h-full">
      <SideNav />
      <div className="flex flex-col w-full h-full">
        <AppTabs />
        <Outlet />
      </div>
    </div>
  );
};

export default AppRoute;
