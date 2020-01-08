"use strict";

const createConnection = require("../libs/query");
const connection = createConnection();

async function orderPost({ title, categories, author, quantity }) {
  const user = await connection.query(
    `insert into order (name, lastname, email, phone, adress, date, time) values('${name}', '${lastname}', '${email}', '${phone}', '${adress}', '${date}', '${time}')`
  );
  return user;
}

async function order_Get({ book_id }) {
  const user = await connection.query(
    `SELECT * FROM books WHERE id=${book_id}`
  );
  return user;
}

module.exports = { orderPost, order_Get };
