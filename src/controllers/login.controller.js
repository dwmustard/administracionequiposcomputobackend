const auth = require("../services/auth.service");

exports.login = async (req, res) => {
  const {username, password} = req.body;
  try {
    const token = await auth.login(username, password);

    res.json({ message: 'OK', token, username});
  }catch (err){
    res.status(403).send(err);
  }
};
exports.logout = async (req, res) => {
  const {username} = req.body;
  try {
    const token = await auth.logout(username);

    res.json({ message: 'OK', token, username});
  }catch (err){
    res.status(403).send(err);
  }
};