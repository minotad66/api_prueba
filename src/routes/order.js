'use strict';

const controller = require('../controllers/order');

function orders (app) {
  app.post('/orders', controller.order)
  app.get('/orders', controller.getOrder)
  app.get('/', controller.home)
}

module.exports = orders