import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineEpics, Epic, ofType } from "redux-observable";
import { map, tap, ignoreElements } from "rxjs/operators";
import WebSocketService from "../../services/websocket/websocket";

const NAME = "websocket";

type WebsocketState = {
  connected: boolean;
};

const initialState: WebsocketState = {
  connected: false,
};

export const websocketSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    connected: (state) => {
      state.connected = true;
    },
    disconnected: (state) => {
      state.connected = false;
    },
  },
});

// Actions
export const connect = createAction(`${NAME}/connect`);
export const disconnect = createAction(`${NAME}/disconnect`);
export const send = createAction<any>(`${NAME}/send`);
export const message = createAction<any>(`${NAME}/message`);

// Epics
const messageEpic: Epic = () => {
  return WebSocketService.message$.pipe(
    map((data: any) => message(data))
  );
};

const sendEpic: Epic = (action$) => {
  return action$.pipe(
    ofType(send.type),
    tap((action: PayloadAction<any>) => {
      WebSocketService.send(action.payload.method, action.payload.params, action.payload.return_params);
    }),
    ignoreElements()
  );
};

export const epics = combineEpics(
  messageEpic,
  sendEpic,
);