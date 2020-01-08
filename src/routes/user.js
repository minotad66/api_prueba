'use strict';

const controller = require('../controllers/user');

function orders (app) {
  app.post('/orders', controller.order)
  app.get('/orders', controller.getOrder)
  app.get('/', controller.home)
  app.get('/driver', controller.driver);
}

module.exports = orders