import type { FC, ReactNode } from "react";

import "./shell.module.css";
import { AppBar } from "../app-bar";

interface IShellProps {
  appActions?: ReactNode;
}

export const Shell: FC<IShellProps> = ({ children, appActions }) => (
  <div className="w-screen h-screen flex flex-col dark:bg-code-900 bg-gray-50 dark:text-dawn-200">
    <AppBar actions={appActions} />
    {children}
  </div>
);
