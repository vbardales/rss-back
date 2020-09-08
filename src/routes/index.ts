import Router from 'koa-router';

import * as actions from '../actions';
import retrieveStation from '../corelogic/usecases/station-retrieval/retrieveStation';
import {HttpSourceGateway} from '../adapters/secondary/HttpSourceGateway';

const router = new Router();

const sourceGateway = new HttpSourceGateway('https://data.ratp.fr/api/records/1.0/search/?dataset=positions-geographiques-des-stations-du-reseau-ratp&q=&facet=stop_name&refine.stop_name=');

router
  .post('/stations/find', async (ctx) => {
    try {
      ctx.body = await actions.retrieveStation({ sourceGateway }, ctx.request.body.name);
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  })
;

export default router;
