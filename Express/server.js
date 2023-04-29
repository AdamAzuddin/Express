const express = require("express");
const app = express()

// what happen when someone do request to home root
app.get("/", function (req, res){
    console.log(req)
    res.send("<h1>Hello from my first express server</h1>")
})
app.listen(3000, function(){console.log("Server has started at port 3000")})