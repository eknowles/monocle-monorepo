import { StrictMode, FC } from "react";
import { Provider } from "react-redux";
import {
  Outlet,
  Route,
  Routes,
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
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
import { history } from "../history";

import messages from "@monocle/common/compiled-lang/en.json";

const title = import.meta.env.VITE_BRAND_NAME;

// todo add better error screens
const Fallback = () => <Shell title={title}>Error</Shell>;

const Main: FC = () => (
  <Shell title={title} appActions={<AuthButton />}>
    <Outlet />
  </Shell>
);

const App: FC = () => {
  return (
    <StrictMode>
      <IntlProvider messages={messages as any} locale="en" defaultLocale="en">
        <Provider store={store}>
          <HistoryRouter history={history}>
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
                    <Route
                      element={<ServerRoute />}
                      path="server/:serverId/*"
                    />
                  </Route>
                </Route>
              </Routes>
            </ErrorBoundary>
          </HistoryRouter>
        </Provider>
      </IntlProvider>
    </StrictMode>
  );
};

export default App;
