const db = require("../models");
const equiment = db.equiment;

exports.create = (equiment) => {
  return Equiment.create(equiment);
};

exports.findAll = () => {
  return Equiment.findAll();
};

exports.findByEquimentname = (equiment) =>{
  return Equiment.findOne({where :{equiment}});
};

exports.update = (user) =>{
  return Equiment.findOne({where: { equiment: user.equimentId }})
    .then(() => {
      return Equiment.update(user,{where: { equiment: user.equimentId }});
    });
};

exports.delete = (equiment) =>{
  return Equiment.destroy({where: { equiment: equiment.equimentId }});
};