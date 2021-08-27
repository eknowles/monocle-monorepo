import {
  Action,
  createAction,
  createSelector,
  createSlice,
  Draft,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  State as MonocleState,
  SubscribeResponse,
} from "@monocle/protobuf/generated/monocle";
import { combineEpics, Epic, ofType } from "redux-observable";
import { EMPTY, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { LOCALSTORAGE_AUTH_TOKEN_KEY } from "../../../constants";
import { authenticate } from "../../../services/auth/authenticate";
import {
  subscribe as monocleSubscribe,
  getClient,
} from "../../../services/monocle";

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
export type Subscribe = ReturnType<typeof subscribe>;
export const loggedOut = createAction(`${serverSlice.name}/loggedOut`);
export type LoggedOut = ReturnType<typeof loggedOut>;

// selectors
export const getServerId = (state: any) =>
  (state.server as ServerState).state?.identifier;
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
    switchMap(({ payload: { host, username, password } }) =>
      // @ts-ignore
      authenticate(host, username, password).pipe(
        // @ts-ignore
        map(({ jwttoken }) => {
          if (!jwttoken) {
            throw new Error("no token");
          }

          localStorage.setItem(LOCALSTORAGE_AUTH_TOKEN_KEY, jwttoken);

          history.push("/app");

          return serverSlice.actions.authSuccess({ host, token: jwttoken! });
        }),
        catchError((_error) => [serverSlice.actions.authFailed({ host })])
      )
    )
  );
};

const onAuthSuccessEpic: Epic = (action$, state$) => {
  return action$.pipe(
    ofType(serverSlice.actions.authSuccess.type),
    map(({ payload: { host, token } }) => subscribe({ host, token }))
  );
};

const logoutEpic: Epic = (action$, _state$, { history }) => {
  return action$.pipe(
    ofType(serverSlice.actions.logout.type),
    map(() => {
      localStorage.removeItem(LOCALSTORAGE_AUTH_TOKEN_KEY);
      history.push("/login");

      return loggedOut();
    })
  );
};

const subscribeEpic: Epic = (action$, _state$) => {
  return action$.pipe(
    ofType<Subscribe, any>(subscribe.type),
    switchMap(({ payload }) =>
      // @ts-ignore
      monocleSubscribe(payload).pipe(
        // @ts-ignore
        map((value: SubscribeResponse) => {
          if (value.message!.typeUrl === "type.googleapis.com/proto.State") {
            const stateObj = MonocleState.decode(value.message!.value);
            return serverSlice.actions.state(stateObj);
          }

          return [{ type: value.message!.typeUrl }];
        })
      )
    )
  );
};

export const epics = combineEpics(
  authEpic,
  logoutEpic,
  onAuthSuccessEpic,
  subscribeEpic
);
