import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics } from 'redux-observable';
import { epics as serverEpic, serverSlice } from './server';
import { epics as viewsEpic, viewsSlice } from './view';

export const rootEpic = combineEpics(serverEpic, viewsEpic);

export const rootReducer = combineReducers({
  [serverSlice.name]: serverSlice.reducer,
  [viewsSlice.name]: viewsSlice.reducer,
});
