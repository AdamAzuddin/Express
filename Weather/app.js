const express = require("express");
const https = require("https");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const cityName = req.body.cityName;
  console.log(cityName);
  const url =
    `https://api.openweathermap.org/data/2.5/weather/?appId=728aa78f35ceb1acb144f937f063bb4c&q=${cityName}&units=metric`;
  https.get(url, function (resp) {
    resp.on("data", function (data) {
      // covert hexadecimal code to JSON
      // the opposite is JSON.stringify()
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(desc);
      res.write(
        `<h1>The temperature in ${cityName} in ${temperature} degree Celcius</h1>`
      );
      res.write(`<p>Current weather is ${desc}</p>`);
      res.write(`<img src="${iconUrl}"/>`);
      res.send();
    });
  });
});
/*
 */
app.listen(3000, function () {
  console.log("Starting server at port 3000");
});
