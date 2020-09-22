module.exports = app => {
  const Users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", Users.create);

  // Retrieve all Users
  router.get("/", Users.findAll);

  // Retrieve a single User with idZ
  router.get("/:username", Users.findUser);

  // Update a User with id
  router.put("/:username", Users.updateUser);

  // Delete a User with id
  router.delete("/:username", Users.deleteUser);

  app.use('/user', router);
};