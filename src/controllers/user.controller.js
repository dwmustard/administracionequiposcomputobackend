const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const userService = require("../services/user.service");

exports.create = (req, res) => {
  let user = req.body;
  userService.create(user)
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
 
};

exports.findAll = (req, res) => {
  userService.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
};

exports.findUser = (req, res) => {
  let username = req.params.username;
  userService.findByUsername(username)
    .then(data => {
      if(data == null){
        res.status(400).send('User not found');
      }
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
}

exports.updateUser = (req, res) => {
  let newUser = req.body;
  newUser.username = req.params.username;
  userService.update(newUser)
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err.message);
  });
};

exports.deleteUser = (req, res) => {
  userService.delete(req.body)
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err.message);
  });
};
