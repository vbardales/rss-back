import Koa from 'koa';
import http from 'http';
import bodyParser from 'koa-bodyparser';

import routes from './routes';

export default () => {
  const port = process.env.PORT || 8000;
  const app = new Koa();

  app.use(bodyParser());
  app.use(routes.routes());
  app.use(routes.allowedMethods());

  app.on('error', (err) => {
    console.error('server error', err);
  });

  console.log(`Koa server running on port ${port}.`);

  const appServer = http
    .createServer(app.callback())
  ;

  appServer.listen(port);

  return appServer;
};
