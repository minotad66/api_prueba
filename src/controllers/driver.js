"use strict";

const driverService = require("../services/driver");
const contactRepository = require("../repositories/driver");

async function getdriver(req, res) {
  let response = {};
  try {
    response = await contactRepository.driverGet();
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    console.log(err);
  }
  res.status(200).json(response.rows);
}

async function get_driver(req, res) {
  const { params } = req;
  let response = {};
  try {
    response = await driverService.get_driver(params);
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

async function postdriver(req, res) {
  const { body } = req;
  let response = {};

  try {
    response = await driverService.post_driver(body);
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(200).json(`driver ${body.title} created!`);
}

async function putdriver(req, res) {
  const { body, params } = req;
  let response = {};

  try {
    response = await driverService.put_driver(body, params);
    if (response.failed) {
      return res.status(response.status).send({ message: response.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(200).json(`driver ${body.title} update!`);
}

async function deletedriver(req, res) {
  const { params } = req;
  let response = {};
  try {
    response = await driverService.delete_driver(params);
    if (response.data.failed) {
      return res
        .status(response.data.status)
        .send({ message: response.data.message });
    }
  } catch (err) {
    next(err);
  }
  res.status(201).send(`driver ${driver_id} delete!`);
}

module.exports = {
  getdriver,
  get_driver,
  postdriver,
  putdriver,
  deletedriver
};
