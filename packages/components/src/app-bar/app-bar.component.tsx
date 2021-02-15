import type { FC, ReactChild } from 'react';

import SettingsIcon from '@monocle/icons/src/settings.svg';

export const AppBar: FC<{ actions: ReactChild }> = ({ actions }) => (
  <div className="dark:bg-black px-2 py-1 text-xs flex justify-between">
    <div className="dark:text-code-500 uppercase">
      <span className="font-medium">Monocle</span>
      <span className="font-bold ml-1">Security</span>
    </div>
    <div>{actions}</div>
  </div>
);
