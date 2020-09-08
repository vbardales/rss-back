import actions from '../../../actions';
import { InMemorySourceGateway } from '../../../adapters/secondary/InMemorySourceGateway';

describe('Station retrieval', () => {

  let sourceGateway: InMemorySourceGateway;

  beforeEach(() => {
    sourceGateway = new InMemorySourceGateway();
  });

  it('should retrieve a given station', async () => {
    sourceGateway.station = { id: 'abc' };
    const res = await actions.retrieveStation({ sourceGateway }, { name: 'abc' });
    expect(res).toEqual({
      id: 'abc',
    });
  });
});
