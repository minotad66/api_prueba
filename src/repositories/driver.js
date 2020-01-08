"use strict";

const createConnection = require("../libs/query");
const connection = createConnection();

const options = { year: "numeric", month: "numeric", day: "numeric" };
let date = new Date();
date = date.toLocaleDateString("es-ES", options);

async function driverGet() {
  const user = await connection.query("SELECT * FROM driver");
  return user;
}

async function driver_Get({ driver_id }) {
  const user = await connection.query(
    `SELECT * FROM driver WHERE id=${driver_id}`
  );
  return user;
}

async function driverPost({ title, categories, author, quantity }) {
  const user = await connection.query(
    `insert into driver (title, created_at, categories, author, quantity) values('${title}', '${date}', '${categories}', '${author}', '${quantity}')`
  );
  return user;
}

async function driverPut({ title, categories, author, quantity }, { driver_id }) {
  const user = await connection.query(
    `UPDATE driver SET title='${title}', created_at='${date}', categories='${categories}', author='${author}', quantity='${quantity}' WHERE id=${driver_id}`
  );
  return user;
}

async function driverDelete({ driver_id }) {
  const user = await connection.query(`DELETE FROM driver WHERE id=${driver_id}`);
  return user;
}

module.exports = {
  driverGet,
  driver_Get,
  driverPost,
  driverPut,
  driverDelete
};
