require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1> please login in this system</h1>");
});

app.get("/twitter", (req, res) => {
  res.send("http.deepakkumarshren.com");
});
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/Signup", (req, res) => {
  res.send("<h1>This is SignUp Page<h1>");
});
