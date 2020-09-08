import { SourceGateway } from '../../corelogic/gateways/sourceGateway.interface';
import Station from '../../corelogic/models/station';

export class InMemorySourceGateway implements SourceGateway {
  private _station: Station | undefined;
  private _technicalError: boolean = false;

  async get(name: string): Promise<Station | undefined> {
    if (this._technicalError) {
      throw new Error('Technical error occurred during retrieval');
    }

    return Promise.resolve(this._station);
  }

  technicalError() {
    this._technicalError = true;
  }

  set station(station: any) {
    this._station = new Station(station);
  }
}
