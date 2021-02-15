import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Shell } from '@monocle/components';

import HomePage from '../routes/app';
import LoginPage from '../routes/login';
import { ProvideAuth } from '../services/auth';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Shell appActions={<AuthButton />}>
          <Switch>
            <PrivateRoute path="/app">
              <HomePage />
            </PrivateRoute>
            <Route component={LoginPage} path="/login" />
          </Switch>
        </Shell>
      </BrowserRouter>
    </ProvideAuth>
  );
};

export default hot(App);
