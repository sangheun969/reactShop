const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("react-/build"));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "./react-/build/index.html"));
  res.sendFile(path.join(__dirname, "./react-/build/index.html"));
});

app.listen("10000", () => {
  console.log("FrontEnd Server Start");
});
