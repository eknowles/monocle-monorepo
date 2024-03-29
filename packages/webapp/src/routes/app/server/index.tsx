import { createElement, FC } from "react";
import { SideNavItem } from "@monocle/components";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { getServerListItem } from "../../../redux/modules/server";
import { DetailsRoute } from "./details";
import { LogsRoute } from "./logs";
// import { GroupsRoute } from "./groups";
// import { UsersRoute } from "./users";

export const ServerRoute: FC = () => {
  const { id, name } = useSelector(getServerListItem);

  if (!id || !name) return null;

  const basePath = `/app/server/${id}`;

  const routes = [
    {
      path: `details`,
      name: "Details",
      component: DetailsRoute,
    },
    {
      path: `logs`,
      name: "Logs",
      component: LogsRoute,
    },
  ];

  const element = useRoutes(
    routes.map((r) => ({ path: r.path, element: createElement(r.component) }))
  );

  return (
    <div className="h-full w-full dark:bg-code-900 bg-white flex">
      <div className="dark:bg-code-900 border-r bg-light-200 dark:border-code-700 w-52 flex h-full items-start flex-col">
        {routes.map((route) => (
          <SideNavItem
            key={route.path}
            path={route.path}
            state={{
              setTab: {
                path: basePath,
                name,
                icon: "server",
                params: { serverId: id },
              },
            }}
          >
            {route.name}
          </SideNavItem>
        ))}
      </div>
      {element}
    </div>
  );
};
