"use strict";

const booksService = require("../services/books");
const contactRepository = require("../repositories/books");

async function getBooks(req, res) {
  let response = {};
  try {
    response = await contactRepository.booksGet();
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(response.rows);
}

async function get_Books(req, res) {
  const { params } = req;
  let response = {};
  try {
    response = await booksService.get_Books(params);
    if (response.data.failed) {
      return res
        .status(response.data.status)
        .send({ message: response.data.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(200).json(response.data.rows);
}

async function postBooks(req, res) {
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
  res.status(200).json(`book ${body.title} created!`);
}

async function putBooks(req, res) {
  const { body, params } = req;
  let response = {};

  try {
    response = await booksService.put_Books(body, params);
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(200).json(`book ${body.title} update!`);
}

async function deleteBooks(req, res) {
  const { params } = req;
  let response = {};
  try {
    response = await booksService.delete_Books(params);
    if (response.data.failed) {
      return res
        .status(response.data.status)
        .send({ message: response.data.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(201).send(`book ${book_id} delete!`);
}

module.exports = {
  getBooks,
  get_Books,
  postBooks,
  putBooks,
  deleteBooks
};
