"use strict";

const controller = require("../controllers/driver");

module.exports = function(app) {
  app.get("/driver", controller.getdriver);

  app.get("/driver/:book_id", controller.getdriver);

  app.post("/driver", controller.postdriver);

  app.put("/driver/:book_id", controller.putdriver);

  app.delete("/driver/:book_id", controller.deletedriver);
};