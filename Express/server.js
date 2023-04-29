const express = require("express");
const app = express()

// what happen when someone do request to home root
app.get("/", function (request, response){
    console.log(request)
})
app.listen(3000, function(){console.log("Server has started at port 3000")})