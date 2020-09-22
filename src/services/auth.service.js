const jwt = require('jsonwebtoken');
const db = require("../models");
const config = require("../config/jwt.config");
const User = db.users;
const UserLog = db.userLog;

exports.login = async (username, password) => {
  if (!username || !password){
    throw {message: ' Username & Password are required!'};
  }
  try{
  let user = await User.findOne({where :{username}});
    if (!user){
      throw {message: ' Username or password incorecct!'};
    }
    if (user.get('password') != password){
      throw {message: ' Username or password incorecct!'};
    }
    let token = jwt.sign(user.dataValues, config.jwtSecret, { expiresIn: '1h' });
    const userLog = {
      username: user.get('username'),
      action: 'Login' 
    }
    UserLog.create(userLog);
    return token;
  }catch(err) {
    throw { error: err };
  }  
};
exports.logout = async (username) => {
  if (!username){
    throw {message: ' Username & Password are required!'};
  }
  try{
  let user = await User.findOne({where :{username}});
    if (!user){
      throw {message: ' Username incorecct!'};
    }
    const userLog = {
      username: user.get('username'),
      action: 'Logout' 
    }
    UserLog.create(userLog);
    return;
  }catch(err) {
    throw { error: err };
  }  
};