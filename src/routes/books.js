"use strict";

const controller = require("../controllers/books");

module.exports = function(app) {
  app.get("/books", controller.getBooks);

  app.get("/books/:book_id", controller.getBooks);

  app.post("/books", controller.postBooks);

  app.put("/books/:book_id", controller.putBooks);

  app.delete("/books/:book_id", controller.deleteBooks);
};
