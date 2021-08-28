import type { FC } from "react";
import classnames from "classnames";
import { useRouteMatch, RouteProps, Link } from "react-router-dom";

export type ISideNavItemProps<T> = { state: T } & Pick<
  RouteProps,
  "path" | "exact"
>;

export const SideNavItem: FC<ISideNavItemProps<any>> = ({
  path,
  exact,
  state,
  children,
}) => {
  const match = useRouteMatch({ path, exact });

  return (
    <Link
      to={{ pathname: path as string, state }}
      className={classnames(
        "px-2 py-1 dark:text-white w-full text-xs flex items-center focus:outline-none focus:ring focus:border-blue-900",
        {
          "dark:bg-code-800 dark:hover:bg-code-700 hover:bg-gray-200": !match,
          "dark:bg-code-700 bg-gray-200": !!match,
        }
      )}
    >
      {children}
    </Link>
  );
};
