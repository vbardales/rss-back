import actions from '../../../actions';
import { InMemorySourceGateway } from '../../../adapters/secondary/InMemorySourceGateway';

describe('Station retrieval', () => {

  let sourceGateway: InMemorySourceGateway;

  beforeEach(() => {
    sourceGateway = new InMemorySourceGateway();
  });

  it('should retrieve a given station', async () => {
    sourceGateway.station = {
      id: 'abcid',
      name: 'abcname',
      gps: 'abcgps',
      description: 'abcdescription',
    };
    const res = await actions.retrieveStation({ sourceGateway }, { name: 'abcname' });
    expect(res).toEqual({
      id: 'abcid',
      name: 'abcname',
      gps: 'abcgps',
      description: 'abcdescription',
    });
  });

  it('should handle technical error', async () => {
    sourceGateway.technicalError();
    await expect(actions.retrieveStation({ sourceGateway }, { name: 'abcname' })).rejects.toThrow('An error happened on station retrieval');
  });

  it('should retrieve nothing and reject if no station with the given name', async () => {
    await expect(actions.retrieveStation({ sourceGateway }, { name: 'abcname' })).rejects.toThrow('No station found');
  });
});
