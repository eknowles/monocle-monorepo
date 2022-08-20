import type { FC } from "react";
import classnames from "classnames";
import { useMatch, RouteProps, NavLink } from "react-router-dom";

export type ISideNavItemProps<T> = { state?: T } & Pick<
  RouteProps,
  "path" | "children"
>;

export const SideNavItem: FC<ISideNavItemProps<any>> = ({
  path,
  state = {},
  children,
}) => {

  return (
    <NavLink
      to={{ pathname: path as string }}
      state={state}
      className={({ isActive }) => classnames(
        "px-2 py-1 dark:text-white w-full text-xs flex items-center focus:outline-none focus:ring focus:border-blue-900",
        {
          "dark:hover:bg-code-700 hover:bg-gray-200": !isActive,
          "dark:bg-code-700 bg-gray-200": !!isActive,
        }
      )}
    >
      {/*// @ts-ignore */}
      {children}
    </NavLink>
  );
};
