const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req,res){
    // name of file no matter the server deploy in cloud, local computer etc
    //__dirname give current path to this file no matter computer
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/", function (req,res){
    var height = Number(req.body.height)
    var weight = Number(req.body.weight)

    var result = height*height
    result= weight/height
    result = result.toFixed(2)
    
    res.send(`Your BMI is ${result}`)
})
app.listen(3000, function(){console.log("Starting server at port 3000")})