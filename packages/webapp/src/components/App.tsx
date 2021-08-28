import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { Shell } from "@monocle/components";

import { history } from "../history";
import { store } from "../redux";
import HomePage from "../routes/app";
import LoginPage from "../routes/login";
import AuthButton from "./AuthButton";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Shell appActions={<AuthButton />}>
          <Switch>
            <Route component={HomePage} path="/app" />
            <Route component={LoginPage} path="/login" />
            <Route component={LoginPage} />
          </Switch>
        </Shell>
      </Router>
    </Provider>
  );
};

export default hot(module)(App);
