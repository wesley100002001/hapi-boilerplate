import Hapi from 'hapi'
import hapiAuthJwt from 'hapi-auth-jwt'
import vision from 'vision'
import inert from 'inert'
import lout from 'lout'

import route from './api/helloworld/routes/getHelloworld'
import test from './api/helloworld/routes/test'

const server = new Hapi.Server();

server.connection({
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT || 9876)
});

server.register(
  [
    hapiAuthJwt,
    vision,
    inert,
    lout
  ], (err) => {
    server.views({
      engines: {
        html: require('handlebars')
      },
      relativeTo: __dirname,
      path: 'views'
  });
});

server.route(route);
server.route(test);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});