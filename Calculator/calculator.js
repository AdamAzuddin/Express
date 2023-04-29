const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req,res){
    // name of file no matter the server deploy in cloud, local computer etc
    //__dirname give current path to this file no matter computer
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function (req,res){
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1+num2
    res.send(`${num1}+${num2} = ${result}`)
})
app.listen(3000, function(){console.log("Starting server at port 3000")})