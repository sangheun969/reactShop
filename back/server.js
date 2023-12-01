const express = require("express");
const app = express();
const userRouter = require("./router/user.router");
const db = require("./lib/db");
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://homework.hyunjun.kr");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(userRouter);

app.listen(11000, async () => {
  await db.sequelize.sync({ force: true });

  console.log("BackEnd Server Start");
});
