// Dependencies
// =============================================================
var express = require("express");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "seinfeld_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

});

var app = express();
var PORT = process.env.PORT || 3000;



// * Create a `/cast` route that will display all the actors and their data ordered by their id's.

app.get("/cast", function(req,res){
    connection.query(
        "SELECT * FROM actors", 
        function(err, res) {
            if (err) throw err;

            console.log(res);
            connection.end();
        }

    )
    // res.json(res)
    res.send(res);
    
})

//    * Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.

//    * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });