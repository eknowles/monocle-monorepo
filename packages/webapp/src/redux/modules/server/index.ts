import {
  createAction,
  createSelector,
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  type State as MonocleState,
} from "../../../services/monocle/types";
import { toast } from "@monocle/components";
import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, map, switchMap } from "rxjs/operators";
import { LOCALSTORAGE_AUTH_TOKEN_KEY } from "../../../constants";
import { from, Observable } from "rxjs";
import WebSocketService from "../../../services/websocket/websocket";

const NAME = "server";
const initialToken =
  localStorage.getItem(LOCALSTORAGE_AUTH_TOKEN_KEY) ?? undefined;

// types
type ServerState = {
  host?: string;
  token?: string;
  authenticated: boolean;
  state?: MonocleState;
};

type AuthPayload = {
  host: string;
  username: string;
  password: string;
};

const initialState: ServerState = {
  authenticated: false,
  token: initialToken,
};

export const serverSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    logout: () => ({ authenticated: false }),
    state: (state: Draft<ServerState>, action: PayloadAction<MonocleState>) => {
      state.state = action.payload;
    },
    authSuccess: (
      state: Draft<ServerState>,
      action: PayloadAction<{ host: string; token: string }>
    ) => {
      state.authenticated = true;
      state.host = action.payload.host;
      state.token = action.payload.token;
    },
    authFailed: (
      state: Draft<ServerState>,
      action: PayloadAction<{ host: string }>
    ) => {
      state.authenticated = false;
      state.host = action.payload.host;
      state.token = undefined;
    },
  },
});

// actions
export const auth = createAction<AuthPayload>(`${serverSlice.name}/auth`);
export type Auth = ReturnType<typeof auth>;

export const subscribe = createAction<Record<"host" | "token", string>>(
  `${serverSlice.name}/subscribe`
);

type SubscribeRes = {
  method: "subscribe";
  result: MonocleState;
}

export const wsMessage = createAction<{ id: string; jsonrpc: string; } & SubscribeRes | { method: string; params?: object }>(
  `${serverSlice.name}/ws`
);
export type WSMesaage = ReturnType<typeof wsMessage>;
export type Subscribe = ReturnType<typeof subscribe>;
export const loggedOut = createAction(`${serverSlice.name}/loggedOut`);
export type LoggedOut = ReturnType<typeof loggedOut>;

// selectors
export const getServerLogs = (state: any) =>
  (state.server as ServerState).state?.serverLogMessages;
export const getServerId = (state: any) =>
  (state.server as ServerState).state?.identifier;
export const getAuthStatus = (state: any) =>
  (state.server as ServerState).authenticated;
export const getServerAuthToken = (state: any) =>
  (state.server as ServerState).token;
export const getServerVersion = (state: any) =>
  (state.server as ServerState).state?.version;
export const getServerArchitecture = (state: any) =>
  (state.server as ServerState).state?.architecture;
export const getServerName = (state: any) =>
  (state.server as ServerState).state?.name;
export const getRecordings = (state: any) =>
  (state.server as ServerState).state?.recordings;
export const getServerListItem = createSelector(
  [getServerId, getServerName],
  (id, name) => ({
    id,
    name,
  })
);
export const getServerMeta = createSelector(
  [getServerId, getServerName, getServerVersion, getServerArchitecture],
  (id, name, version, architecture) => ({
    id,
    name,
    version,
    architecture,
  })
);

// epics
const authEpic: Epic = (action$, _state$, { history }) => {
  return action$.pipe(
    ofType<Auth, any>(auth.type),
    switchMap(({ payload: { host, username, password } }) => {
      return new Observable<{ jwttoken: string }>((subscriber) => {
        const sendAuth = () => {
          WebSocketService.send("authenticate", { username, password }, {});
        };

        if (WebSocketService.readyState === WebSocket.OPEN) {
          sendAuth();
        } else {
          WebSocketService.on("open", () => {
            sendAuth();
          });
        }

        WebSocketService.on("message", (data: any) => {
          if (data.method === "authenticate") {
            if (data.result && data.result.jwttoken) {
              subscriber.next({ jwttoken: data.result.jwttoken });
              subscriber.complete();
            } else {
              subscriber.error(new Error("Authentication failed"));
            }
          }
        });
      }).pipe(
        map(({ jwttoken }) => {
          if (!jwttoken) {
            throw new Error("no token");
          }

          localStorage.setItem(LOCALSTORAGE_AUTH_TOKEN_KEY, jwttoken);

          toast.success("Authentication successful");
          return serverSlice.actions.authSuccess({ host, token: jwttoken! });
        }),
        catchError((_error) => {
          toast.error(_error.message || "Failed to authenticate");
          return [serverSlice.actions.logout()];
        })
      );
    })
  );
};

const onAuthSuccessEpic: Epic = (action$, state$, { history }) => {
  return action$.pipe(
    ofType(serverSlice.actions.authSuccess.type),
    map(({ payload: { host, token } }) => {
      history.push("/app");
      return subscribe({ host, token });
    })
  );
};

const logoutEpic: Epic = (action$, _state$, { history }) => {
  return action$.pipe(
    ofType(serverSlice.actions.logout.type),
    map(() => {
      localStorage.removeItem(LOCALSTORAGE_AUTH_TOKEN_KEY);
      history.push("/login");
      return [serverSlice.actions.authFailed({ host: "" }), loggedOut()];
    })
  );
};

const subscribeEpic: Epic = (action$, _state$) => {
  return action$.pipe(
    ofType<Subscribe, any>(subscribe.type),
    switchMap(({ payload: { token } }) => {
      return new Observable<any>((subscriber) => {
        const sendSubscribe = () => {
          WebSocketService.send("subscribe", { jwttoken: token }, {});
        };

        if (WebSocketService.readyState === WebSocket.OPEN) {
          sendSubscribe();
        } else {
          WebSocketService.on("open", () => {
            sendSubscribe();
          });
        }

        WebSocketService.on("message", (data: any) => {
          if (data.method == "subscribe") {
            subscriber.next(serverSlice.actions.state(data.result));
          } else {
            // subscriber.next(wsMessage(data));
          }
        });
      }).pipe(
        map((data: any) => data),
        catchError((_error) => {
          toast.error(_error.message || "Failed to subscribe");
          return [serverSlice.actions.logout()];
        })
      );
    })
  );
};

export const epics = combineEpics(
  authEpic,
  logoutEpic,
  onAuthSuccessEpic,
  subscribeEpic
);
