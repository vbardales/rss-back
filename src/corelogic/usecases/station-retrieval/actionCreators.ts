import { createAction } from '../../../store/createAction';
import { ActionsUnion } from '../../../store/actionsUnion';
import Station from '../../models/station';

export const RETRIEVE_STATION = 'RETRIEVE_STATION';
export const STATION_RETRIEVED = 'STATION_RETRIEVED';

export const Actions = {
  retrieveStation: ({ name }: { name: string }) => createAction(RETRIEVE_STATION, { name }),
  stationRetrieved: (station: Station) => createAction(STATION_RETRIEVED, { station }),
};

export type Actions = ActionsUnion<typeof Actions>;
