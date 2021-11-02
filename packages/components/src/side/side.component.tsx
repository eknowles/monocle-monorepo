import type { FC } from "react";

export const Side: FC = ({ children }) => (
  <div className="dark:bg-code-800 border-r bg-light-100 dark:border-code-700 w-52 flex h-full items-start flex-col">
    {children}
  </div>
);
