import { SourceGateway } from '../../corelogic/gateways/sourceGateway.interface';
import Station from '../../corelogic/models/station';

export class InMemorySourceGateway implements SourceGateway {
  private _station: Station | undefined;

  async get(name: string): Promise<Station> {
    if (!this._station) {
      throw new Error('Technical error occurred during retrieval');
    }

    return Promise.resolve(this._station);
  }

  set station(station: any) {
    this._station = new Station(station);
  }
}
