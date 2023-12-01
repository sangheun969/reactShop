const express = require("express");
const app = express();
const userRouter = require("./router/user.router");
const shopRouter = require("./router/shop.router");
const db = require("./lib/db");
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(userRouter);
app.use(shopRouter);

app.listen(4000, async () => {
  await db.sequelize.sync({ force: false });

  console.log("BackEnd Server Start");
});
