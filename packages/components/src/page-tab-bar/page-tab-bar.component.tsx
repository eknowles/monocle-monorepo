import React from "react";
import type { FC } from "react";

export const PageTabBar: FC = ({ children }) => {
  return <div className="dark:bg-code-800 bg-grey-100 flex">{children}</div>;
};
