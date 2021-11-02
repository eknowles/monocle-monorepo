import { PageTab, PageTabBar } from "@monocle/components";
import type { FC } from "react";
import { Link, useRouteMatch, generatePath } from "react-router-dom";
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

const Tab: FC<ITabProps> = ({ icon, name, params, onClose }) => {
  const Icon = iconMap[icon as string];
  const path = generatePath(pathMap[icon], params);
  const match = useRouteMatch({ path, exact: false });

  return (
    <Link<ILocationSetTabState>
      to={{ pathname: path, state: { setTab: { name, icon, params, path } } }}
      className="inline-flex"
    >
      <PageTab
        onClose={onClose}
        icon={<Icon width="14" height="14" />}
        name={name}
        isActive={!!match}
      />
    </Link>
  );
};

export const AppTabs: FC = () => {
  const { tabs, removeTab } = usePageTabs();

  return (
    <PageTabBar>
      {tabs.map((tab, index) => (
        <Tab key={tab.path} {...tab} onClose={() => removeTab(index)} />
      ))}
    </PageTabBar>
  );
};
