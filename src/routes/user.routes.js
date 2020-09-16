module.exports = app => {
  const Users = require("../controllers/user.controller.js");
  const LogUser = require("../controllers/logUser.controller")

  var router = require("express").Router();

  // Create a new User
  router.post("/", Users.create);

  // Retrieve all Users
  router.get("/", Users.findAll);

  // Retrieve a single User with idZ
  router.get("/:id", Users.findOne);

  // Update a User with id
  router.put("/:id", Users.update);

  // Delete a User with id
  router.delete("/:id", Users.delete);

  // Delete all Users
  router.delete("/", Users.deleteAll);

  router.post("/login",LogUser.login);

  router.post("/logout",LogUser.logout);

  app.use('/user', router);
};