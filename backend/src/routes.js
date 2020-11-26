const { Router } = require('express');

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json('Welcome to the Boost seminar🚀');
});

module.exports = routes;