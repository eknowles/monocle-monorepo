import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules';
import { history } from '../history';

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    history,
  },
});

export const configStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
      }).concat(
        // Custom middleware:
        epicMiddleware,
      ),
  });

  epicMiddleware.run(rootEpic);

  return store;
};
