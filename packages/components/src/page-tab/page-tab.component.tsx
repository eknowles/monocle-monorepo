import type { MouseEvent } from "react";
import type { FC, ReactChild } from "react";
import classnames from "classnames";

import CrossIcon from "@monocle/icons/src/x.svg";

export interface IPageTabProps {
  icon: ReactChild;
  name: string;
  isActive?: boolean;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const PageTab: FC<IPageTabProps> = ({
  icon,
  isActive,
  name,
  onClose,
}) => {
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onClose(e);
  };

  return (
    <div
      className={classnames("inline-flex items-center justify-between", {
        "dark:bg-code-900 bg-white": isActive,
        "dark:bg-code-700 bg-gray-100": !isActive,
      })}
    >
      <div />
      <div className="flex items-center">
        <div className="dark:text-code-200 p-2">{icon}</div>
        <div className="dark:text-code-100 text-sm py-2">{name}</div>
      </div>
      <button
        onClick={handleClose}
        disabled={!isActive}
        className={classnames(
          "dark:text-code-100 dark:hover:text-white p-2 focus:outline-none",
          {
            "pointer-events-none opacity-0": !isActive,
          }
        )}
      >
        <CrossIcon width="16" height="16" />
      </button>
    </div>
  );
};
