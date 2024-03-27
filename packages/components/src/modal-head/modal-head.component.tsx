import type { FC, PropsWithChildren } from "react";
import CrossIcon from "@monocle/icons/src/x.svg?react";

export const ModalHead: FC<PropsWithChildren<{ onClose?: any }>> = ({
  children,
  onClose,
}) => (
  <div className="inline-flex items-center justify-between dark:bg-black bg-gray-200 w-full">
    <div className="flex items-center">
      <div className="dark:text-code-100 text-black py-2 px-3 uppercase text-xs font-bold">
        {children}
      </div>
    </div>
    {onClose && (
      <button
        onClick={onClose}
        className="dark:text-code-100 dark:hover:text-white p-2 focus:outline-none focus:ring focus:border-blue-900"
      >
        <CrossIcon width="22" height="22" />
      </button>
    )}
  </div>
);
