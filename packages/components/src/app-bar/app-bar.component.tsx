import type { FC, ReactNode } from "react";

export type AppBarProps = { actions: ReactNode };

export const AppBar: FC<AppBarProps> = ({ actions }) => (
  <div className="dark:bg-black bg-gray-200 px-2 py-1 text-xs flex justify-between border-b dark:border-code-800">
    <div
      className="dark:text-code-400 uppercase"
      title={`${process.env.NODE_ENV} - ${process.env.GIT_VERSION} - ${process.env.GIT_AUTHOR_DATE}`}
    >
      <span className="font-medium">Monocle</span>
      <span className="font-bold ml-1">Security</span>
    </div>
    <div>{actions}</div>
  </div>
);
