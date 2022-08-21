import type { FC, PropsWithChildren } from "react";

export type ISideSectionProps = {
  label: string;
};

export const SideSection: FC<PropsWithChildren<ISideSectionProps>> = ({
  label,
  children,
}) => (
  <div className="dark:text-code-300 w-52 flex items-start px-2 pb-1 pt-3 text-sm justify-between flex-row">
    <span>{label}</span>
    {children}
  </div>
);
