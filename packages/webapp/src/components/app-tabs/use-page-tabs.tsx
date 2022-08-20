import type { IPageTabProps } from '@monocle/components';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export enum IconTypes {
  SERVER = 'server',
  VIEW = 'view',
  RECORDING = 'recording',
}

export type ILocationTabState = { path: string; icon: IconTypes } & Pick<IPageTabProps, 'name'> & {
    params: object;
  };
export type ILocationSetTabState = { setTab: ILocationTabState };

export const usePageTabs = () => {
  const [tabs, setTabs] = useState<ILocationTabState[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  if ((location.state as ILocationSetTabState)?.setTab) {
    const { setTab } = location.state as ILocationSetTabState;

    // If tab isn't found, add it to the end
    if (!tabs.some((tab) => tab.path === setTab.path)) {
      setTabs([...tabs, { ...setTab }]);
    }
  }

  const removeTab = (index: number) => {
    // close first and only tab
    if (tabs.length === 1 && index === 0) {
      setTabs([]);
      navigate('/app');
      return;
    }

    // has multiple tabs
    const newTabs = [...tabs];
    newTabs.splice(index, 1);
    const nextActiveTab = newTabs[index - 1] || newTabs[index];
    setTabs(newTabs);
    navigate(nextActiveTab.path, { state: { setTab: nextActiveTab } });
  };

  return {
    removeTab,
    tabs,
  };
};
