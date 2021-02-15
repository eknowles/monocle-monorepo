import classnames from 'classnames';
import type { FC } from 'react';

import ServerIcon from '@monocle/icons/src/server.svg';

type ButtonType = JSX.IntrinsicElements['button'];
export interface IServerListItemProps extends ButtonType {
  name: string;
  isActive?: boolean;
}

export const ServerListItem: FC<IServerListItemProps> = ({
  name,
  isActive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={classnames(
      'px-2 py-1 dark:text-white w-full text-xs flex items-center focus:outline-none focus:ring focus:border-blue-900',
      {
        'dark:bg-code-800 dark:hover:bg-code-700': !isActive,
        'dark:bg-code-700': isActive,
      },
    )}
  >
    <ServerIcon width="14" height="14" className="mr-1 text-code-200" />
    {name}
  </button>
);
