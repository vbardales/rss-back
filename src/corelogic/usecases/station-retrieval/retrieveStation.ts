import { SourceGateway } from '../../gateways/sourceGateway.interface';

export default async ({ sourceGateway }: {
  sourceGateway: SourceGateway,
}, { name }: { name: string }) => {
  let res;
  try {
    res = await sourceGateway.get(name);
  } catch {
    throw new Error('An error happened on station retrieval');
  }

  if (!res) {
    throw new Error('No station found');
  }

  return res;
};
