const express = require("express");
const app = express()

//when server get req to home route
app.get("/", function (req, res){
    
    console.log(req)
    // send this as reponse
    res.send("<h1>Hello from my first express server</h1>")
})
app.listen(3000, function(){console.log("Server has started at port 3000")})