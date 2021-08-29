import {
  createAction,
  createEntityAdapter,
  createSelector,
  createSlice,
  Draft,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { combineEpics, Epic, ofType } from "redux-observable";
import { map, switchMap } from "rxjs/operators";
import { GRPC_SERVER } from "../../../constants";
import { getClient } from "../../../services/monocle";

const NAME = "views";

const sizes = [1, 2, 4, 6, 8];

type ViewItem = {
  type: "video";
  recording: string;
  videotrackid: number;
  audiotrackid: number; // optional can be 0
  sdp: string;
};

// types
type View = {
  id: string;
  name: string;
  size: 1;
  recordings: any[];
};

const initialState = {
  ids: ["1"],
  entities: {
    "1": {
      id: "1",
      name: "Default View",
      size: 4,
      recordings: [
        "2415377118017325286",
        "3611975266688258670",
        "7020385884664454866",
      ],
    },
  },
};

const viewsAdapter = createEntityAdapter<View>();

export const viewsSlice = createSlice({
  name: NAME,
  initialState: viewsAdapter.getInitialState(initialState),
  reducers: {
    addView: (state, action: PayloadAction<{ name: string }>) => {
      viewsAdapter.addOne(state as any, {
        id: nanoid(5),
        name: action.payload.name,
        size: 1,
        recordings: [],
      });
    },
    updateView: viewsAdapter.updateOne as any,
    removeView: viewsAdapter.removeOne as any,
  },
});

// actions
export const increaseSize = createAction<{ id: string }>(
  `${NAME}/increaseSize`
);
export type IncreaseSize = ReturnType<typeof increaseSize>;
export const decreaseSize = createAction<{ id: string }>(
  `${NAME}/decreaseSize`
);
export type DecreaseSize = ReturnType<typeof decreaseSize>;
export const hangUp = createAction<{ peerid: string }>(`${NAME}/hangUp`);
export type HangUp = ReturnType<typeof hangUp>;

// selectors
export const viewsSelectors = viewsAdapter.getSelectors(
  (state: any) => state[NAME]
);

// epics
const hangUpEpic: Epic = (action$, state$) => {
  return action$.pipe(
    ofType<HangUp, any>(hangUp.type),
    map(({ payload }) => {
      const clientOptions = {
        host: GRPC_SERVER,
        token: state$.value.server.token,
      };
      const { client, meta } = getClient(clientOptions);
      return client.HangUpWebRTC(payload, meta).pipe(
        // @ts-ignore
        map(() => ({
          type: "WebRTC/hangUpSuccess",
        }))
      );
    })
  );
};

// exports
export const epics = combineEpics(hangUpEpic);
export const { actions, reducer } = viewsSlice;
