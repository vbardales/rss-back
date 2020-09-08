import actions from '../../../actions';
import { InMemorySourceGateway } from '../../../adapters/secondary/InMemorySourceGateway';
import * as noStationsFixture from '../../../adapters/secondary/noStationsSourceGateway.fixture.json';
import * as multiStationsFixture from '../../../adapters/secondary/multiStationsSourceGateway.fixture.json';
import * as oneStationsFixture from '../../../adapters/secondary/oneStationSourceGateway.fixture.json';

describe('Station retrieval', () => {

  let sourceGateway: InMemorySourceGateway;

  beforeEach(() => {
    sourceGateway = new InMemorySourceGateway();
  });

  it('should retrieve nothing if no station with the given name', async () => {
    sourceGateway.station = noStationsFixture;
    expect(await actions.retrieveStation({ sourceGateway }, { name: 'abcname' })).toEqual([

    ]);
  });

  it('should retrieve a given station if only one match', async () => {
    sourceGateway.station = oneStationsFixture;
    const res = await actions.retrieveStation({ sourceGateway }, { name: 'NOISIELRER' });
    expect(res).toEqual([{
      id: '3682675',
      name: 'NOISIEL RER',
      gps: [
        48.84379185295751,
        2.616085209942924
      ],
      description: 'ALLEE JEAN-PAUL SARTRE - 77337',
    }]);
  });

  it('should handle spaces', async () => {
    sourceGateway.station = noStationsFixture;
    await actions.retrieveStation({ sourceGateway }, { name: 'NOISIEL%20RER' });
    expect(sourceGateway.search).toMatch('NOISIEL+RER');
    await actions.retrieveStation({ sourceGateway }, { name: 'VAL%20DE%20FONTENAY' });
    expect(sourceGateway.search).toMatch('VAL+DE+FONTENAY');
  });

  it('should retrieve multiple stations if multiple matches', async () => {
    sourceGateway.station = multiStationsFixture;
    const res = await actions.retrieveStation({ sourceGateway }, { name: 'VERDUN' });
    expect(res).toEqual([{
      gps:[
        48.76895583436455,
        2.481438661513884
      ],
      description: '1 AVENUE D\'ORADOUR SUR GLANE - 94011',
      name: 'VERDUN',
      id: '3619708'
    },
    {
      gps: [
        48.822231640351454,
        2.420064513493063
      ],
      description: '2 RUE VERDUN - 94069',
      name: 'VERDUN',
      id: '4723815'
    }]);
  });

  it('should handle technical error', async () => {
    sourceGateway.technicalError();
    await expect(actions.retrieveStation({ sourceGateway }, { name: 'abcname' })).rejects.toThrow('An error happened on station retrieval');
  });
});
