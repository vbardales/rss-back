import actions from '../../../actions';
import { HttpSourceGateway } from '../../../adapters/secondary/HttpSourceGateway';

describe('Station retrieval', () => {

  const API = 'https://data.ratp.fr/api/records/1.0/search/?dataset=positions-geographiques-des-stations-du-reseau-ratp&q=&facet=stop_name&refine.stop_name=';
  let sourceGateway: HttpSourceGateway;

  beforeEach(() => {
    sourceGateway = new HttpSourceGateway(API);
  });

  it('should retrieve real data', async () => {
    const res = await actions.retrieveStation({ sourceGateway }, { name: 'NOISIEL%20RER' });
    expect(res).toEqual(
      [{"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84369305454938, 2.616057445323657], "id": "6741418", "name": "NOISIEL RER"}, {"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84379185295751, 2.616085209942924], "id": "3677686", "name": "NOISIEL RER"}, {"description": "ALL JEAN PAUL SARTRE - 77337", "gps": [48.84367552578313, 2.615866716013424], "id": "3677740", "name": "NOISIEL RER"}, {"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84379185295751, 2.616085209942924], "id": "4208561", "name": "NOISIEL RER"}, {"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84369305454938, 2.616057445323657], "id": "4208560", "name": "NOISIEL RER"}, {"description": "ALL JEAN PAUL SARTRE - 77337", "gps": [48.84367552578313, 2.615866716013424], "id": "3681643", "name": "NOISIEL RER"}, {"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84369305454938, 2.616057445323657], "id": "3682674", "name": "NOISIEL RER"}, {"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84379185295751, 2.616085209942924], "id": "6741419", "name": "NOISIEL RER"}, {"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84369305454938, 2.616057445323657], "id": "3677687", "name": "NOISIEL RER"}, {"description": "ALLEE JEAN-PAUL SARTRE - 77337", "gps": [48.84379185295751, 2.616085209942924], "id": "3682675", "name": "NOISIEL RER"}]
    );
  });
});
