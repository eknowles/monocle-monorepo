import {
  createAction,
  createEntityAdapter,
  createSelector,
  createSlice,
  Draft,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { combineEpics, Epic, ofType } from 'redux-observable';

const NAME = 'views';

const sizes = [1, 2, 4, 6, 8];

// types
type View = {
  id: string;
  name: string;
  size: 1;
  recordings: any[];
};

const initialState = {
  ids: ['1'],
  entities: {
    '1': {
      id: '1',
      name: 'Default View',
      size: 1,
      recordings: [],
    },
  },
};

const viewsAdapter = createEntityAdapter<View>();

export const viewsSlice = createSlice({
  name: NAME,
  initialState: viewsAdapter.getInitialState(initialState),
  reducers: {
    // addView: (
    //   state: Draft<ViewState>,
    //   action: PayloadAction<{ name: string }>,
    // ) => {
    //   state.push({
    //     id: nanoid(4),
    //     name: action.payload.name,
    //     size: 1,
    //     recordings: [],
    //   });
    // },
  },
});

// actions
export const addView = createAction<{ name: string }>(`${NAME}/addView`);
export type AddView = ReturnType<typeof addView>;
export const removeView = createAction<{ id: string }>(`${NAME}/removeView`);
export type RemoveView = ReturnType<typeof removeView>;
export const increaseSize = createAction<{ id: string }>(
  `${NAME}/increaseSize`,
);
export type IncreaseSize = ReturnType<typeof increaseSize>;
export const decreaseSize = createAction<{ id: string }>(
  `${NAME}/decreaseSize`,
);
export type DecreaseSize = ReturnType<typeof decreaseSize>;

// selectors
export const viewsSelectors = viewsAdapter.getSelectors(
  (state: any) => state[NAME],
);

// epics

// exports
export const epics = combineEpics();
