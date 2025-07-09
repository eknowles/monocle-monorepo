import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineEpics, Epic, ofType } from "redux-observable";
import { filter, map, mergeMap, take, withLatestFrom } from "rxjs/operators";
import { of, concat } from "rxjs";
import { message as wsMessage, send as wsSend } from "./websocket";
import { nanoid } from "nanoid";
import { RootState } from "..";

const NAME = "webrtc";

type WebRTCState = {
  [peerId: string]: {
    status: "connecting" | "connected" | "disconnected";
    localDescription?: RTCSessionDescriptionInit;
    remoteDescription?: RTCSessionDescriptionInit;
    iceCandidates: RTCIceCandidateInit[];
  };
};

const initialState: WebRTCState = {};

export const webrtcSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    connecting: (state, action: PayloadAction<{ peerId: string }>) => {
      state[action.payload.peerId] = {
        status: "connecting",
        iceCandidates: [],
      };
    },
    connected: (state, action: PayloadAction<{ peerId: string }>) => {
      state[action.payload.peerId].status = "connected";
    },
    disconnected: (state, action: PayloadAction<{ peerId: string }>) => {
      delete state[action.payload.peerId];
    },
    localDescriptionCreated: (
      state,
      action: PayloadAction<{
        peerId: string;
        description: RTCSessionDescriptionInit;
        recordingToken: string | number;
        videotrackid: number;
      }>
    ) => {
      state[action.payload.peerId].localDescription = action.payload.description;
    },
    remoteDescriptionCreated: (
      state,
      action: PayloadAction<{
        peerId: string;
        description: RTCSessionDescriptionInit;
      }>
    ) => {
      state[action.payload.peerId].remoteDescription = action.payload.description;
    },
    iceCandidateCreated: (
      state,
      action: PayloadAction<{ peerId: string; candidate: RTCIceCandidateInit }>
    ) => {
      state[action.payload.peerId].iceCandidates.push(action.payload.candidate);
    },
  },
});

// Actions
export const call = createAction<{
  peerId: string;
  recordingToken: string | number;
  videotrackid: number;
}>(`${NAME}/call`);
export const hangUp = createAction<{ peerId: string }>(`${NAME}/hangUp`);

// Epics
const onLocalDescriptionCreatedEpic: Epic = (action$) => {
  return action$.pipe(
    ofType(webrtcSlice.actions.localDescriptionCreated.type),
    map((action: any) =>
      call({
        peerId: action.payload.peerId,
        recordingToken: action.payload.recordingToken,
        videotrackid: action.payload.videotrackid,
      })
    )
  );
};

const callEpic: Epic = (action$, state$) => {
  return action$.pipe(
    ofType(call.type),
    withLatestFrom(state$),
    mergeMap(([action, state]: [any, RootState]) => {
      const { peerId, recordingToken, videotrackid } = action.payload;
      const traceId = nanoid(5);
      const localDescription = state.webrtc[peerId].localDescription;
      const token = state.server.token;
      const recording = state.server.state?.recordings.find(
        (r) => r.token === recordingToken
      );
      const audioTrack = recording?.tracks.find((t) => t.type === "audio");

      const sendAction = wsSend({
        method: "call_webrtc",
        params: {
          peer_id: peerId,
          recording_token: String(recordingToken),
          video_track_id: String(videotrackid),
          audio_track_id: String(audioTrack?.id ?? 0),
          sdp: localDescription?.sdp,
          jwttoken: token,
        },
        return_params: { traceId, recording_token: recordingToken },
      });

      const response$ = action$.pipe(
        ofType(wsMessage.type),
        filter((messageAction: any) => messageAction.payload.return_params?.traceId === traceId),
        take(1),
        map((messageAction: any) =>
          webrtcSlice.actions.remoteDescriptionCreated({
            peerId,
            description: {
              type: "answer",
              sdp: messageAction.payload.result.sdp,
            },
          })
        )
      );

      return concat(of(sendAction), response$);
    })
  );
};

export const epics = combineEpics(onLocalDescriptionCreatedEpic, callEpic);