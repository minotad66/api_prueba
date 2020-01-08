'use strict'
const driverRepository = require('../repositories/driver')

async function get_driver (data) {
  try {
    data = await driverRepository.driver_Get(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

async function post_driver(data) {
  try {
    data = await driverRepository.driverPost(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

async function put_driver(params, body) {
  try {
    body = await driverRepository.driverPut(params, body)
    return body
  } catch (err) {
    return console.log(err);
  }
}

async function delete_driver(data) {
  try {
    data = await driverRepository.driverDelete(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

module.exports = {
  get_driver,
  post_driver,
  put_driver,
  delete_driver
}