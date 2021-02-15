import type { FC, ReactChild } from 'react';

import './shell.module.css';
import { AppBar } from '../app-bar';

interface IShellProps {
  appActions?: ReactChild;
}

export const Shell: FC<IShellProps> = ({ children, appActions }) => (
  <div className="w-screen h-screen flex flex-col dark:bg-code-900 dark:text-dawn-200">
    <AppBar actions={appActions} />
    {children}
  </div>
);
