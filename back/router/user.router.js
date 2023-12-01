const express = require("express");
const userRouter = express.Router();
const { postUsers, postLogin } = require("../controller/user.controller");

/*Signup*/
userRouter.post("/users", postUsers);
/*Login*/
userRouter.post("/login", postLogin);

module.exports = userRouter;
