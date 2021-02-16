import { PageTab, PageTabBar } from '@monocle/components';
import type { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IconTypes, ILocationSetTabState, usePageTabs } from './use-page-tabs';
import Server from '@monocle/icons/src/server.svg';
import Grid from '@monocle/icons/src/grid.svg';

const iconMap: any = {
  [IconTypes.SERVER]: Server,
  [IconTypes.VIEW]: Grid,
};

const pathMap = {
  [IconTypes.SERVER]: `/app/server/:id`,
  [IconTypes.VIEW]: `/app/view/:id`,
};

interface ITabProps {
  icon: IconTypes;
  name: string;
  id: string | number;
  onClose: () => void;
}

const Tab: FC<ITabProps> = ({ icon, name, id, onClose }) => {
  const Icon = iconMap[icon as string];
  const path = pathMap[icon].replace(':id', `${id}`);
  const match = useRouteMatch({ path, exact: true });

  return (
    <Link<ILocationSetTabState>
      to={{ pathname: path, state: { setTab: { name, icon, id, path } } }}
    >
      <PageTab
        onClose={onClose}
        id={id}
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
