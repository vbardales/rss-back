import { SourceGateway } from '../../gateways/sourceGateway.interface';
import ResultSet from '../../models/resultSet';

export default async ({ sourceGateway }: {
  sourceGateway: SourceGateway,
}, { name }: { name: string }) => {
  let res;
  try {
    const parsedName = decodeURI(name).replace(/ /g, '+');
    const result = await sourceGateway.get(parsedName);
    res = new ResultSet(result);
  } catch (err) {
    console.error(`An error occurred while getting stations: ${err.message}`, err);
    throw new Error('An error happened on station retrieval');
  }

  return res.records;
};
