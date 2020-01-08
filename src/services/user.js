const orderRepository = require("../repositories/user");
const {
  validateData,
  validateEmail,
  validateNumber,
  validateTexto
} = require('../utils')

async function order( data ) {
  console.log(data);
  
  const valid = validateData(['name', 'lastname', 'email', 'phone', 'address', 'date', 'time'], data)
  console.log(valid);
  
  if (
    !valid ||
    !validateEmail(data.email) ||
    !validateNumber(data.phone) || 
    !validateNumber(data.time) && data.time < 9 && data.time > 1 ||
    !validateTexto(data.name)
  ) {
    return { failed: true, status: 400, message: 'Ha ocurrido un error con los datos, por favor verifiquelos!' }
  }
  try {
    data = await orderRepository.orderPost(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

async function get_order (data) {
  try {
    data = await booksRepository.order_Get(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

module.exports = {
  order,
  get_order
};
