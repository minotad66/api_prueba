"use strict";

const controller = require("../controllers/driver");

module.exports = function(app) {
  app.get("/driver", controller.getdriver);

  app.post("/driver", controller.postdriver);

  app.put("/driver/:driver_id", controller.putdriver);

  app.delete("/driver/:driver_id", controller.deletedriver);
};