module.exports = app => {
  const Users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", Users.create);

  // Retrieve all Users
  router.get("/", Users.findAll);

  // Retrieve all published Users
  router.get("/published", Users.findAllPublished);

  // Retrieve a single User with id
  router.get("/:id", Users.findOne);

  // Update a User with id
  router.put("/:id", Users.update);

  // Delete a User with id
  router.delete("/:id", Users.delete);

  // Delete all Users
  router.delete("/", Users.deleteAll);

  app.use('/user', router);
};