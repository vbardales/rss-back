export interface SourceGateway {
  get(name: string): Promise<Object | undefined>;
}
