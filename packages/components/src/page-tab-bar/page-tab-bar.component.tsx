import type { FC } from 'react';
import { PageTab } from '../page-tab';

export const PageTabBar: FC = ({ children }) => {
  return (
    <div className="dark:bg-code-800">
      <PageTab icon="server" title="Server" />
      <PageTab icon="view" title="View 1" isActive />
      <PageTab icon="view" title="View 2" />
      <div className="flex-1" />
    </div>
  );
};
