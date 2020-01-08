'use strict'
const booksRepository = require('../repositories/books')

async function get_Books (data) {
  try {
    data = await booksRepository.book_Get(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

async function post_Books(data) {
  try {
    data = await booksRepository.booksPost(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

async function put_Books(params, body) {
  try {
    body = await booksRepository.booksPut(params, body)
    return body
  } catch (err) {
    return console.log(err);
  }
}

async function delete_Books(data) {
  try {
    data = await booksRepository.booksDelete(data)
    return { data }
  } catch (err) {
    return console.log(err);
  }
}

module.exports = {
  get_Books,
  post_Books,
  put_Books,
  delete_Books
}
