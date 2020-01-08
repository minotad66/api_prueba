"use strict";

const createConnection = require("../libs/query");
const connection = createConnection();

async function orderPost({ name, lastname, email, phone, address, date, time }) {
  const user = await connection.query(
    `insert into orders (name, lastname, email, phone, address, date, time) values('${name}', '${lastname}', '${email}', '${phone}', '${address}', '${date}', '${time}')`
  );
  return user;
}

async function orderGet() {
  const user = await connection.query("SELECT * FROM orders");
  return user;
}

module.exports = { orderPost, orderGet };
