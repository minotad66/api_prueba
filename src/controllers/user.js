const orderService = require('../services/user')
const orderRepository = require("../repositories/user");

async function order(req, res, next) {
  const { body } = req;
  
  let response = {};

  try {
    response = await orderService.order(body);
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(200).json(`Su orden se ha creado exitosamente!`);
}

async function getOrder(req, res) {
  let response = {};
  try {
    response = await orderRepository.orderGet();
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
  }
  res.status(200).json(response.rows);
}

module.exports = {
  order,
  getOrder
}
