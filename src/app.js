"use strict";

const express = require("express");
const bodyParse = require("body-parser");
const cors = require('cors')

const initOrderRouter = require("./routes/order");

const app = express();

app.use(bodyParse.json());
app.use(cors())

function initApp() {
  initOrderRouter(app);
  return app;
}

module.exports = initApp;
