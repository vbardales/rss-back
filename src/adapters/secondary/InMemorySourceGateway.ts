import { Observable, ReplaySubject } from 'rxjs';

import { SourceGateway } from '../../corelogic/gateways/sourceGateway.interface';
import Station from '../../corelogic/models/station';

export class InMemorySourceGateway implements SourceGateway {
  private _station: Station | undefined;

  get(name: string): Observable<Station> {
    const subject = new ReplaySubject<Station>();

    if (!this._station) {
      subject.error('Technical error occurred during retrieval');
    } else {
      subject.next(this._station);
    }

    return subject;
  }

  set station(station: any) {
    this._station = new Station(station);
  }
}
