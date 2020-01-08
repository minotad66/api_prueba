"use strict";

const createConnection = require("../libs/query");
const connection = createConnection();

async function orderPost({ name, lastname, email, phone, address, date, hour, driver_id }) {
  const user = await connection.query(
    `insert into orders (name, lastname, email, phone, address, date, hour, driver_id) values('${name}', '${lastname}', '${email}', '${phone}', '${address}', '${date}', '${hour}', '${driver_id}')`
  );
  return user;
}

async function orderGet() {
  const user = await connection.query("SELECT * FROM orders");
  return user;
}

async function driverGet() {
  const user = await connection.query("SELECT * FROM driver");
  return user;
}

async function driver({ driver_id }) {
  const user = await connection.query(
    `SELECT * FROM driver WHERE id=${driver_id}`
  );
  return user;
}


module.exports = { orderPost, orderGet, driverGet, driver };
