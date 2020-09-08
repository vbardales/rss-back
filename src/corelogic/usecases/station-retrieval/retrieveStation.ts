import { ActionsObservable, StateObservable, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';

import { AppState } from '../../../store/appState.interface';
import * as actionCreators from './actionCreators';
import { SourceGateway } from '../../gateways/sourceGateway.interface';
import Station from '../../models/station';

export const retrieveStation = (action$: ActionsObservable<actionCreators.Actions>,
                                state$: StateObservable<AppState>,
                                { sourceGateway }: {
                                  sourceGateway: SourceGateway
                                }) => {
  return action$.pipe(
    ofType<actionCreators.Actions,
      ReturnType<typeof actionCreators.Actions.retrieveStation>>(actionCreators.RETRIEVE_STATION),
    switchMap(action => {
      return sourceGateway.get(action.payload.name)
        .pipe(
          map<Station>(station => actionCreators.Actions.stationRetrieved(station))
        )
      ;
    })
  );
};
