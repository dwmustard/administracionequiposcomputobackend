const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  console.log(req.body)
  const user = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name
  } 
  User.create(user)
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(401).send(err)
    })
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.findAll()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(404).send(err)
  }); 
};
//Validate a single user to login
exports.validateUser = (req, res) => {
  let user = req.body;
  User.findAll({where : {username: user.username,password: user.password}})
    .then(data => {
      if (data.length == 0){
        res.status(403).send('unauthorized');
      }
      res.send(data)
    })
    .catch(err => {
      res.status(403).send(err)
    })
};
// Find a single User with an username
exports.findByUsername = (req, res) => {
  let username1 = req.body.username;
  User.findAll({where : {username: username1}})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(403).send(err)
    })
};


// Find a single User with an id
exports.findOne = (req, res) => {
  
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Users
exports.findAllPublished = (req, res) => {
  
};