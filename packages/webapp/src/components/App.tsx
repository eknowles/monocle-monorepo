import type { FC } from "react";
import { Provider } from "react-redux";
import {
  Outlet,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import { ErrorBoundary } from "react-error-boundary";
import { Shell } from "@monocle/components";

import { store } from "../redux";
import HomePage from "../routes/app";
import { RecordingRoute } from "../routes/app/recording";
import { ServerRoute } from "../routes/app/server";
import { ViewRoute } from "../routes/app/view";
import LoginPage from "../routes/login";
import AuthButton from "./AuthButton";

import messages from "@monocle/common/compiled-lang/en.json";

const Fallback = () => <div>error</div>;

const Main: FC = () => (
  <Shell appActions={<AuthButton />}>
    <Outlet />
  </Shell>
);

const App: FC = () => {
  return (
    <IntlProvider messages={messages as any} locale="en" defaultLocale="en">
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={Fallback}>
            <Routes>
              <Route path="/*" element={<Main />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="app" element={<HomePage />}>
                  <Route
                    element={<RecordingRoute />}
                    path="recording/:recordingToken"
                  />
                  <Route element={<ViewRoute />} path="view/:viewId" />
                  <Route element={<ServerRoute />} path="server/:serverId/*" />
                </Route>
              </Route>
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </IntlProvider>
  );
};

export default App;
