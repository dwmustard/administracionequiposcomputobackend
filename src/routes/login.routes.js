module.exports = app => {
  const Login = require("../controllers/login.controller");

  var router = require("express").Router();

  router.post("/login", Login.login);

  router.post("/logout", Login.logout);

  app.use('/', router);
};