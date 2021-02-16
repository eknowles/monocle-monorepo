import type { FC, ReactChild } from 'react';
import classnames from 'classnames';

import CrossIcon from '../../../icons/src/x.svg';

export interface IPageTabProps {
  id: string | number;
  icon: ReactChild;
  name: string;
  isActive?: boolean;
  onClose: any;
}

export const PageTab: FC<IPageTabProps> = ({
  icon,
  isActive,
  name,
  onClose,
}) => {
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onClose(e);
  };

  return (
    <div
      className={classnames('inline-flex items-center justify-between', {
        'dark:bg-code-900': isActive,
        'dark:bg-code-700': !isActive,
      })}
    >
      <div />
      <div className="flex items-center">
        <div className="dark:text-code-400 p-2">{icon}</div>
        <div className="dark:text-code-100 text-sm py-2">{name}</div>
      </div>
      <button
        onClick={handleClose}
        disabled={!isActive}
        className={classnames(
          'dark:text-code-100 dark:hover:text-white p-2 focus:outline-none',
          {
            'pointer-events-none opacity-0': !isActive,
          },
        )}
      >
        <CrossIcon width="16" height="16" />
      </button>
    </div>
  );
};
