// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
// create engine, call it handlebars
app.set("view engine", "handlebars");
// when you need engine, handlebars. when app.render looks it will use this one

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];


//   * Using handlebars and express, create a route called `/icecream/:name`. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.
app.get("/icecream/:name", function(req, res) {
    for (var i=0; i < icecreams.length; i++) {
        if (icecreams[i].name === req.params.name) {
            return res.render("subFolder/icecream", icecreams[i]);
        }
    }
    res.render("index", )
});

//   * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.
app.get("/icecreams", function(req, res) {
    res.render("index", )
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });