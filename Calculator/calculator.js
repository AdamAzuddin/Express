const express = require("express")
const app = express()

app.get("/", function (req,res){
    // name of file no matter the server deploy in cloud, local computer etc
    //__dirname give current path to this file no matter computer
    res.sendFile(__dirname+"/index.html")
})
app.listen(3000, function(){console.log("Starting server at port 3000")})