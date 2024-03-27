import type { FC, ReactNode, PropsWithChildren } from "react";

export type AppBarProps = { actions: ReactNode, title: string };

export const AppBar: FC<PropsWithChildren<AppBarProps>> = ({ actions, title }) => (
  <div className="dark:bg-black bg-gray-200 px-2 py-1 text-xs flex justify-between border-b dark:border-code-800">
    <div className="dark:text-code-400 uppercase">
      <span className="font-medium">{title}</span>
    </div>
    <div>{actions}</div>
  </div>
);
