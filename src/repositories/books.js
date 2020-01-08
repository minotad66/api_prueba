"use strict";

const createConnection = require("../libs/query");
const connection = createConnection();

const options = { year: "numeric", month: "numeric", day: "numeric" };
let date = new Date();
date = date.toLocaleDateString("es-ES", options);

async function booksGet() {
  const user = await connection.query("SELECT * FROM books");
  return user;
}

async function book_Get({ book_id }) {
  const user = await connection.query(
    `SELECT * FROM books WHERE id=${book_id}`
  );
  return user;
}

async function booksPost({ title, categories, author, quantity }) {
  const user = await connection.query(
    `insert into books (title, created_at, categories, author, quantity) values('${title}', '${date}', '${categories}', '${author}', '${quantity}')`
  );
  return user;
}

async function booksPut({ title, categories, author, quantity }, { book_id }) {
  const user = await connection.query(
    `UPDATE books SET title='${title}', created_at='${date}', categories='${categories}', author='${author}', quantity='${quantity}' WHERE id=${book_id}`
  );
  return user;
}

async function booksDelete({ book_id }) {
  const user = await connection.query(`DELETE FROM books WHERE id=${book_id}`);
  return user;
}

module.exports = {
  booksGet,
  book_Get,
  booksPost,
  booksPut,
  booksDelete
};
