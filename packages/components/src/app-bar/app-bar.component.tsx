import { FC } from 'react';

import SettingsIcon from '@monocle/icons/src/settings.svg';

export const AppBar: FC = () => (
  <div className="dark:bg-midnight-500 dark:text-dawn-400 px-2 py-1 uppercase text-xs flex justify-between">
    <div>
      Monocle Security <span className="font-bold ml-1">Web Client</span>
    </div>
    <div>
      <SettingsIcon width="14" height="14" />
    </div>
  </div>
);
