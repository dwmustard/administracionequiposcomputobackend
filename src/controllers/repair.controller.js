const db = require("../models");
const Repair = db.repairs;
const Op = db.Sequelize.Op;
const repairService = require("../services/repair.service");

exports.create = (req, res) => {
  let repair = req.body;
  repairService.create(repair)
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
 
};

exports.findAll = (req, res) => {
  repairService.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
};

exports.findRepair = (req, res) => {
  let repairid = req.params.repairid;
  repairService.findByRepairid(repairid)
    .then(data => {
      if(data == null){
        res.status(400).send('Repair not found');
      }
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
}

exports.updateRepair = (req, res) => {
  let newRepair = req.body;
  newRepair.repairid = req.params.repairid;
  repairService.update(newRepair)
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err.message);
  });
};

exports.deleteRepair = (req, res) => {
  repairService.delete(req.body)
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err.message);
  });
};
