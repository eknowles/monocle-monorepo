import React from "react";
import type { FC } from "react";

export const PageTabBar: FC = ({ children }) => {
  return (
    <div className="dark:bg-code-800 bg-grey-100 flex">
      {children}
      <div className="inline-flex flex-1 border-b border-l dark:border-code-700 border-grey-100"></div>
    </div>
  );
};
