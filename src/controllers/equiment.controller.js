const db = require("../models");
const Equiment = db.equiments;
const Op = db.Sequelize.Op;
const equimentService = require("../services/equiment.service");

exports.create = (req, res) => {
  let equiment = req.body;
  equimentService.create(equiment)
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
 
};

exports.findAll = (req, res) => {
  equimentService.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
};

exports.findEquiment = (req, res) => {
  let equimentid = req.params.equimentid;
  equimentService.findByEquimentid(equimentid)
    .then(data => {
      if(data == null){
        res.status(400).send('Equiment not found');
      }
      res.send(data);
    })
    .catch(err => {
      res.status(400).send(err.message);
    });
}

exports.updateEquiment = (req, res) => {
  let newEquiment = req.body;
  newEquiment.equimentid = req.params.equimentid;
  equimentService.update(newEquiment)
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err.message);
  });
};

exports.deleteEquiment = (req, res) => {
  equimentService.delete(req.body)
  .then(data =>{
    res.send(data);
  })
  .catch(err => {
    res.status(400).send(err.message);
  });
};
