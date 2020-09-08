import { SourceGateway } from '../../corelogic/gateways/sourceGateway.interface';
import axios from 'axios';

export class HttpSourceGateway implements SourceGateway {
  api: string;

  constructor(api: string) {
    this.api = api;
  }

  async get(name: string): Promise<Object | undefined> {
    const url = `${this.api}${name}`;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error(`An error occurred while getting stations (HTTP call): ${err.message}`);
      console.log({
        err,
        url,
      });
    }
  }
}
