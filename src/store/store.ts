import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState } from './appState.interface';
import coreLogicState from './coreLogicStateReducer';
import { retrieveStation } from '../corelogic/usecases/station-retrieval/retrieveStation';

export const createReduxStore = (dependencies: any) => {
  const epicMiddleware = createEpicMiddleware({ dependencies });
  const store = createStore(combineReducers<AppState>({
      coreLogicState,
    }),
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(combineEpics<any>(retrieveStation));
  return store;
};
