// jshint esversion: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static("public"))
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signUp.html");
});

app.use(express.static("public"));

// Set Content-Security-Policy header to disable strict MIME type checking
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' data: blob: 'unsafe-inline'"
  );
  return next();
});
app.listen(3000, function () {
  console.log("Listening at port 3000");
});
