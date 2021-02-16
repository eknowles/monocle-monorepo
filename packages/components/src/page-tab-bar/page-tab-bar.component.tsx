import React from 'react';
import type { FC } from 'react';

export const PageTabBar: FC = ({ children }) => {
  return (
    <div className="dark:bg-code-800">
      {children}
      <div className="flex-1" />
    </div>
  );
};
