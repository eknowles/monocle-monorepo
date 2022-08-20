import type { FC, ReactNode, PropsWithChildren } from "react";
import { ToastProvider } from "../toast";

import "./shell.module.css";
import { AppBar } from "../app-bar";

interface IShellProps {
  appActions?: ReactNode;
  children?: ReactNode;
}

export const Shell: FC<PropsWithChildren<IShellProps>> = ({ children, appActions }) => (
  <>
    <ToastProvider />
    <div className="w-screen h-screen flex flex-col dark:bg-code-900 bg-gray-50 dark:text-dawn-200 overflow-hidden">
      <AppBar actions={appActions} />
      {children}
    </div>
  </>
);
