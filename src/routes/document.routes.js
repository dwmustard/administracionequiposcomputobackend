module.exports = app => {
  const Document = require("../controllers/document.controller");
  const Roles = require("../middlewares/roles.middleware");

  var router = require("express").Router();

  router.get("/userLogs",Document.userLogfindAll);

  router.post("/userLogs/byUser/:username",Roles("User"),Document.userLogfilterByUser);

  router.post("/userLogs/byDate/",Roles("User"), Document.userLogfilterByDate);

  router.post("/userLogs/byDate/:username",Roles("User"), Document.userLogfilterByDateUser);

  app.use('/document', router);
};
