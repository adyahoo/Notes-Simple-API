/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: '192.168.1.4',
    routes: {
      cors: {
        origin: ['*'],
        credentials: true,
      },
    },
  });

  server.route(routes)
  await server.start();
};

init();
