import { combineReducers } from "@reduxjs/toolkit";
import { combineEpics } from "redux-observable";
import { epics as serverEpic, serverSlice } from "./server";
import { epics as viewsEpic, viewsSlice } from "./view";
import { epics as websocketEpic, websocketSlice } from "./websocket";
import { epics as webrtcEpic, webrtcSlice } from "./webrtc";

export const rootEpic = combineEpics(serverEpic, viewsEpic, websocketEpic, webrtcEpic);

export const rootReducer = combineReducers({
  [serverSlice.name]: serverSlice.reducer,
  [viewsSlice.name]: viewsSlice.reducer,
  [websocketSlice.name]: websocketSlice.reducer,
  [webrtcSlice.name]: webrtcSlice.reducer,
});
