import { Observable } from 'rxjs';

import Station from '../models/station';

export interface SourceGateway {
  get(name: string): Observable<Station>;
}
