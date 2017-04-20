'use strict';

const Hapi = require('hapi');
const route = require('./api/helloworld/routes/getHelloworld');

const server = new Hapi.Server();

server.connection({
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT || 9876)
});

server.register(
  [
    require('hapi-auth-jwt'),
    require('vision'),
    require('inert'),
    require('lout')
  ], (err) => {
    
});

server.route(route);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});