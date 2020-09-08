import { combineReducers } from 'redux';

import * as actionCreators from '../corelogic/usecases/station-retrieval/actionCreators';
import Station from '../corelogic/models/station';

const station = (state: Station | null = null, action: actionCreators.Actions) => {
  if (action.type !== actionCreators.STATION_RETRIEVED) {
    return state;
  }

  return action.payload.station;
}

export default combineReducers({
  station,
});
