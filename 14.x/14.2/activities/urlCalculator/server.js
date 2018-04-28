// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./htmlRoutes");
var apiRoutes = require("./apiRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/add/:num/:othernum", htmlRoutes.add);
app.get("/subtract/:num/:othernum", htmlRoutes.subtract);
app.get("/multiply/:num/:othernum", htmlRoutes.multiply);
app.get("/divide/:num/:othernum", htmlRoutes.divide);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});