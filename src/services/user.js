const orderRepository = require("../repositories/user");

const {
  validateData,
  validateEmail,
  validateNumber,
  validateTexto
} = require('../utils')

async function order( data ) {
  console.log(data);
  
  const valid = validateData(['name', 'lastname', 'email', 'phone', 'address', 'date', 'hour'], data)
  console.log(valid);
  
  if (
    !valid ||
    !validateEmail(data.email) ||
    !validateNumber(data.phone) || 
    !validateNumber(data.hour) && data.time < 9 && data.time > 1 ||
    !validateTexto(data.name)
  ) {
    return { failed: true, status: 400, message: 'Ha ocurrido un error con los datos, por favor verifiquelos!' }
  }

  const response = await orderRepository.driverGet()
  const driver = response.rows.length ? response.rows : null
  const driver1 = driver.filter(item => item.estate == true)
  data.driver_id = driver1[Math.floor(Math.random() * ((driver1.length+1)-1)+1)].id

  try {
    data = await orderRepository.orderPost(data)
    return { data }
  } catch (err) {
    return console.log(err);
  } 
}

async function driver (data) {
  try {
    const datas = await orderRepository.driver(data)
    data = datas.filter(item => item.date == data.date)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

module.exports = {
  order,
  driver
};
