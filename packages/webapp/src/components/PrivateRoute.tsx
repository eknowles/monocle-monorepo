import type { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { RootState } from "../redux";

const PrivateRoute: FC<PropsWithChildren<any>> = ({ children, ...rest }) => {
  const isAuthed = useSelector<RootState>(
    (state) => state.server.authenticated
  );

  return (
    <Route
      {...rest}
      render={() =>
        isAuthed ? (
          children
        ) : (
          <Navigate
            replace={true}
            to={{ pathname: "/login" }}
            state={{ from: "/" }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
