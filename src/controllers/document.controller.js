const auth = require("../services/auth.service");
const doc = require("../services/document.service")

exports.userLogfindAll = async (req, res) => {
  try {
    const dd = await doc.userLogfindAll();
    res.send(dd);
  }catch (err){
    res.status(400).send(err);
  }
};

exports.userLogfilterByUser = async (req, res) => {
  let username = req.params.username;
  try {
    const dd = await doc.userLogfilterByUser(username);
    res.send(dd);
  }catch (err){
    res.status(400).send(err);
  }
};

exports.userLogfilterByDate = async (req, res) => {
  let {startDate,stopDate} = req.body;
  try {
    const dd = await doc.userLogfilterByDate(startDate,stopDate);
    res.send(dd);
  }catch (err){
    res.status(400).send(err);
  }
};
exports.userLogfilterByDateUser = async (req, res) => {
  let username = req.params.username;
  let {startDate,stopDate} = req.body;
  try {
    const dd = await doc.userLogfilterByDateUser(username,startDate,stopDate);
    res.send(dd);
  }catch (err){
    res.status(400).send(err);
  }
};