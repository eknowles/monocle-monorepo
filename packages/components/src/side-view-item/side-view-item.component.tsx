import type { FC } from 'react';
import classnames from 'classnames';
import GridIcon from '../../../icons/src/grid.svg';

interface ISideViewItemProps {
  isActive: boolean;
  name: string;
}

export const SideViewItem: FC<ISideViewItemProps> = ({ isActive, name }) => (
  <div
    className={classnames(
      'px-2 py-1 dark:text-white w-full text-xs flex items-center',
      {
        'dark:bg-code-800 dark:hover:bg-code-700': !isActive,
        'dark:bg-code-700': isActive,
      },
    )}
  >
    <GridIcon width="14" height="14" className="mr-1 text-code-200" />
    {name}
  </div>
);
