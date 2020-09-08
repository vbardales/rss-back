import { SourceGateway } from '../../corelogic/gateways/sourceGateway.interface';

export class InMemorySourceGateway implements SourceGateway {
  private _station: Object | undefined;
  private _technicalError: boolean = false;
  private _search: string | undefined;

  async get(name: string): Promise<Object | undefined> {
    this._search = name;
    if (this._technicalError) {
      throw new Error('Technical error occurred during retrieval');
    }

    return Promise.resolve(this._station);
  }

  technicalError() {
    this._technicalError = true;
  }

  set station(station: any) {
    this._station = station;
  }

  get search(): string | undefined {
    return this._search;
  }
}
