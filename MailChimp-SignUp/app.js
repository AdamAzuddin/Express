// jshint esversion: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signUp.html");
  });

app.post("/", function (req,res){
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    console.log(firstName, lastName, email)
})
app.listen(3000, function () {
  console.log("Listening at port 3000");
});
