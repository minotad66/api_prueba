'use strict';

const controller = require('../controllers/user');

function orders (app) {
  app.post('/order', controller.order)
  app.get('/order', controller.getOrder)
}

module.exports = orders