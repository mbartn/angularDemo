var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res)
{   
    res.render("home");
});

app.listen(8080, function()
    {
        console.log("Server has started!");
    });