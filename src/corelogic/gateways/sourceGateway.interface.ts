import Station from '../models/station';

export interface SourceGateway {
  get(name: string): Promise<Station | undefined>;
}
