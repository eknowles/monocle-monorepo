import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RootState } from '../redux';

const PrivateRoute: FC<any> = ({ children, ...rest }) => {
  const isAuthed = useSelector<RootState>(
    (state) => state.server.authenticated,
  );

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
