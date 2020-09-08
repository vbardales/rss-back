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
});
