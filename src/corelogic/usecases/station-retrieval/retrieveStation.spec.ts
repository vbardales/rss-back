import { Store } from 'redux';

import { AppState } from '../../../store/appState.interface';
import { createReduxStore } from '../../../store/store';
import { InMemorySourceGateway } from '../../../adapters/secondary/InMemorySourceGateway';
import * as actionCreators from './actionCreators';

describe('Station retrieval', () => {

  let store: Store<AppState>;
  let initialState: AppState;
  let sourceGateway: InMemorySourceGateway;

  beforeEach(() => {
    sourceGateway = new InMemorySourceGateway();
    store = createReduxStore({ sourceGateway });
    initialState = store.getState();
  });

  it('should retrieve a given station', () => {
    sourceGateway.station = { id: 'abc' };
    store.dispatch(actionCreators.Actions.retrieveStation({ name: 'abc' }));
    expect(store.getState().coreLogicState).toEqual({
      ...initialState,
      stationRetrieval: {
        station: {
          id: 'abc',
        },
      },
    });
  });
});
