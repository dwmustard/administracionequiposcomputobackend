const db = require("../models");
const repair = db.repair;

exports.create = (repair) => {
  return Repair.create(repair);
};

exports.findAll = () => {
  return Repair.findAll();
};

exports.findByRepairid = (repair) =>{
  return Repair.findOne({where :{repair}});
};

exports.update = (user) =>{
  return Repair.findOne({where: { repair: user.repairId }})
    .then(() => {
      return Repair.update(user,{where: { repair: user.repairId }});
    });
};

exports.delete = (repair) =>{
  return Repair.destroy({where: { repair: repair.repairId }});
};