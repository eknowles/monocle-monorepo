import { PageTab, PageTabBar } from "@monocle/components";
import type { FC, PropsWithChildren } from "react";
import { NavLink, useMatch, generatePath, Params } from "react-router-dom";
import { IconTypes, ILocationSetTabState, usePageTabs } from "./use-page-tabs";
import Server from "@monocle/icons/src/server.svg";
import Grid from "@monocle/icons/src/grid.svg";
import Camera from "@monocle/icons/src/camera.svg";

const iconMap: any = {
  [IconTypes.SERVER]: Server,
  [IconTypes.VIEW]: Grid,
  [IconTypes.RECORDING]: Camera,
};

export const pathMap = {
  [IconTypes.SERVER]: `/app/server/:serverId`,
  [IconTypes.VIEW]: `/app/view/:viewId`,
  [IconTypes.RECORDING]: `/app/recording/:recordingToken`,
};

interface ITabProps {
  icon: IconTypes;
  name: string;
  params: object;
  onClose: () => void;
}

const Tab: FC<PropsWithChildren<ITabProps>> = ({
  icon,
  name,
  params,
  onClose,
}) => {
  const Icon = iconMap[icon as string];
  const path = generatePath(pathMap[icon], params as Params);

  return (
    <NavLink
      to={{ pathname: path }}
      state={{ setTab: { name, icon, params, path } }}
      className={
        "inline-flex focus:outline-none focus:ring focus:border-blue-900 focus:z-50"
      }
    >
      {({ isActive }) => (
        <PageTab
          onClose={onClose}
          icon={<Icon width="14" height="14" />}
          name={name}
          isActive={isActive}
        />
      )}
    </NavLink>
  );
};

export const AppTabs: FC<PropsWithChildren<unknown>> = () => {
  const { tabs, removeTab } = usePageTabs();

  return (
    <PageTabBar>
      {tabs.map((tab, index) => (
        <Tab key={tab.path} {...tab} onClose={() => removeTab(index)} />
      ))}
    </PageTabBar>
  );
};
