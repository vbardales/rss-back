import Router from 'koa-router';

import actions from '../actions';
import {HttpSourceGateway} from '../adapters/secondary/HttpSourceGateway';

const router = new Router();

const sourceGateway = new HttpSourceGateway('https://data.ratp.fr/api/records/1.0/search/?dataset=positions-geographiques-des-stations-du-reseau-ratp&q=&facet=stop_name&refine.stop_name=');

router
  .post('/stations/find', async (ctx) => {
    try {
      const res = await actions.retrieveStation({ sourceGateway }, { name: ctx.request.body.name });
      ctx.body = res;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  })
;

export default router;
