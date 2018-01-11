'use strict';

module.exports = {
  method: 'GET',
  path: '/helloworld',
  config: {
    description: 'Say hello!',
    notes: 'The user parameter defaults to \'stranger\' if unspecified',
    tags: ['api', 'greeting']
  },
  handler: (request, reply) => {
    reply('Hello!');
  }
}