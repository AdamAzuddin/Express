const express = require("express")
const https = require("https")

const app = express()


app.get("/", function (req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather/?appId=728aa78f35ceb1acb144f937f063bb4c&q=london&units=metric"
    https.get(url, function (response){
        response.on("data", function (data){
            // covert hexadecimal code to JSON
            // the opposite is JSON.stringify()
            const weatherData = JSON.parse(data)
            const temperature = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            console.log(desc)
            res.write(`<h1>The temperature in London in ${temperature} degree Celcius</h1>`)
            res.write(`<p>Current weather is ${desc}</p>`)
            res.write(`<img src="${iconUrl}"/>`)
            res.send()
        })
    })
})
app.listen(3000, function (){
    console.log("Starting server at port 3000")
})