const db = require("../models");
const User = db.users;
const OnlineUser = db.onlineUser;
const UserLog = db.userLog;

const Op = db.Sequelize.Op;

exports.login = (req, res) => {
  let user = req.body;  
  User.findAll({where : {username: user.username,password: user.password}})
    .then(data => {
      if (data.length == 0){
        res.send({});
        return;
      }
      user = data[0].dataValues;
      const onlineUser = {
        userId: user.id,
        status: 'online'
      }
      const userLog = {
        userId: user.id,
        action: 'login' 
      }
      OnlineUser.create(onlineUser);
      UserLog.create(userLog);
      res.send(user);
    })
    .catch(err => {
      res.status(403).send(err)
    });
};

// Retrieve all Users from the database.
exports.logout = (req, res) => {
  let user = req.body;  
  User.findAll({where : {username: user.username,password: user.password}})
    .then(data => {
      if (data.length == 0){
        res.send({});
        return;
      }
      user = data[0].dataValues;
      const onlineUser = {
        userId: user.id,
        status: 'line'
      }
      const userLog = {
        userId: user.id,
        action: 'logout' 
      }
      OnlineUser.create(onlineUser);
      UserLog.create(userLog);
      res.send('success');
    })
    .catch(err => {
      res.status(403).send(err)
    });
};
