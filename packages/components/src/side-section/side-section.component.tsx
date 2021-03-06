import type { FC } from 'react';

interface ISideSectionProps {
  label: string;
}

export const SideSection: FC<ISideSectionProps> = ({ label, children }) => (
  <div className="dark:bg-code-800 dark:text-code-300 w-52 flex items-start px-2 pb-1 pt-3 text-sm justify-between flex-row">
    <span>{label}</span>
    {children}
  </div>
);
