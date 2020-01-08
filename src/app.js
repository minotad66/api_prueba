"use strict";

const express = require("express");
const bodyParse = require("body-parser");
const cors = require('cors')

const initBooksRouter = require("./routes/books");
const initUserRouter = require("./routes/user");

const app = express();

app.use(bodyParse.json());
app.use(cors())

function initApp() {
  initBooksRouter(app);
  initUserRouter(app);
  return app;
}

module.exports = initApp;
