import type { IPageTabProps } from '@monocle/components';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export enum IconTypes {
  SERVER = 'server',
  VIEW = 'view',
}

export type ILocationTabState = { path: string; icon: IconTypes } & Pick<
  IPageTabProps,
  'id' | 'name'
>;
export type ILocationSetTabState = { setTab: ILocationTabState };

export const usePageTabs = () => {
  const [tabs, setTabs] = useState<ILocationTabState[]>([]);
  const location = useLocation<{ setTab: ILocationTabState }>();
  const history = useHistory<ILocationSetTabState>();

  if (location.state?.setTab) {
    const { setTab } = location.state;

    // If tab isn't found, add it to the start
    if (!tabs.some((tab) => tab.id === setTab.id)) {
      setTabs([{ ...setTab }, ...tabs]);
    }
  }

  const removeTab = (index: number) => {
    // close first and only tab
    if (tabs.length === 1 && index === 0) {
      setTabs([]);
      history.push('/app');
      return;
    }

    // has multiple tabs
    const newTabs = [...tabs];
    newTabs.splice(index, 1);
    const nextActiveTab = newTabs[index];
    setTabs(newTabs);
    history.push(nextActiveTab.path, { setTab: nextActiveTab });
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return {
    removeTab,
    tabs,
  };
};
