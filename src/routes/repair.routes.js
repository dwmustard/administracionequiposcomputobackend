module.exports = app => {
  const Repairs = require("../controllers/repair.controller.js");

  var router = require("express").Router();

  // Create a new Repair
  router.post("/", Repairs.create);

  // Retrieve all Repairs
  router.get("/", Repairs.findAll);

  // Retrieve a single Repair with idZ
  router.get("/:repairid", Repairs.findRepair);

  // Update a Repair with id
  router.put("/:repairid", Repairs.updateRepair);

  // Delete a Repair with id
  router.delete("/:repairid", Repairs.deleteRepair);

  app.use('/repair', router);
};