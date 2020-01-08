const userService = require('../services/user')

async function order(req, res, next) {
  const { body } = req;
  let response = {};

  try {
    response = await booksService.post_Books(body);
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(200).json(`Su orden se ha creado exitosamente!`);
}

async function getOrders(req, res) {
  let response = {};
  try {
    response = await contactRepository.orderGet();
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(response.rows);
}

module.exports = {
  order,
  getOrders
}
