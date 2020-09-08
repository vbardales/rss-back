import { SourceGateway } from '../../gateways/sourceGateway.interface';

export default async ({ sourceGateway }: {
  sourceGateway: SourceGateway,
}, { name }: { name: string }) => {
  return sourceGateway.get(name);
};
