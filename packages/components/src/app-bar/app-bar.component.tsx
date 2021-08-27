import type { FC, ReactNode } from "react";

export const AppBar: FC<{ actions: ReactNode }> = ({ actions }) => (
  <div className="dark:bg-black bg-grey-100 px-2 py-1 text-xs flex justify-between border-b dark:border-code-800">
    <div className="dark:text-code-500 uppercase">
      <span className="font-medium">Monocle</span>
      <span className="font-bold ml-1">Security</span>
    </div>
    <div>{actions}</div>
  </div>
);
