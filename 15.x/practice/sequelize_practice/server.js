var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
// var routerHTML = require("./routes/html-routes");
// var routerAPI = require("./routes/api-routes");
var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("public"));

// app.use(routerHTML);
// app.use(routerAPI);

require("./routes/api-routes.js")(app);

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on http://localhost:" + PORT);
    });
})
