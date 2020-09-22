const { where } = require("sequelize/lib/sequelize");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (user) => {
  return User.create(user);
};

exports.findAll = () => {
  return User.findAll();
};

exports.findByUsername = (username) =>{
  return User.findOne({where :{username}});
};

exports.update = (user) =>{
  return User.findOne({where: { username: user.username }})
    .then(() => {
      return User.update(user,{where: { username: user.username }});
    });
};

exports.delete = (user) =>{
  return User.destroy({where: { username: user.username }});
};