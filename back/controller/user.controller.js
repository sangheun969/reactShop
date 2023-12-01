const userService = require("../service/user.service");

exports.postUsers = async (req, res) => {
  const { id, pw } = req.body;

  const response = await userService.signup(id, pw);
  return res.json(response);
};

exports.postLogin = async (req, res) => {
  const { id, pw } = req.body;

  const response = await userService.login(id, pw);
  return res.json(response);
};
