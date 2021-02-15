import type { FC } from 'react';

interface ISideSectionProps {
  label: string;
}

export const SideSection: FC<ISideSectionProps> = ({ label }) => (
  <div className="dark:bg-code-800 dark:text-code-300 w-52 flex items-start flex-col px-2 pb-1 pt-3 text-sm">
    {label}
  </div>
);
