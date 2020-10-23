module.exports = app => {
  const Equiments = require("../controllers/equiment.controller.js");

  var router = require("express").Router();

  // Create a new Equiment
  router.post("/", Equiments.create);

  // Retrieve all Equiments
  router.get("/", Equiments.findAll);

  // Retrieve a single Equiment with idZ
  router.get("/:equimentid", Equiments.findEquiment);

  // Update a Equiment with id
  router.put("/:equimentid", Equiments.updateEquiment);

  // Delete a Equiment with id
  router.delete("/:equimentid", Equiments.deleteEquiment);

  app.use('/equiment', router);
};