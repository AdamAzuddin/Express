// jshint esversion: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signUp.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/10553b41be";

  const options = {
    method: "POST",
    auth: "adam:a9a53f05f0d80f16b36868775459a6ce5-us21",
  };
  const requestToMailchimp = https.request(url, options, function (resp) {
    resp.on("data", function (data) {
      console.log(JSON.parse(data));
    });

  if (resp.statusCode ===200){
    res.send("Success!")
  }
  else{
    res.send("Failure!")
  }
  });

  requestToMailchimp.write(jsonData);
  requestToMailchimp.end();
  console.log(firstName, lastName, email);
});
app.listen(3000, function () {
  console.log("Listening at port 3000");
});

// api key
// 9a53f05f0d80f16b36868775459a6ce5-us21
// audience/list id
// 10553b41be
