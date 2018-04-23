// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("server2.js: Welcome to the Star Wars Page!");
});

app.get("/:character/:name?", function(req, res) {
// app.get("/:character/:name", function(req, res) {
  var chosen = req.params.character;
  var name = req.params.name;

  // What does this log?
  console.log(chosen, name);
  // res.send(chosen)
  // console.log(characters[0]);

  // for (let i = 0; i < characters.length; i++) {
  //   for (let value in characters[i]) {
  //     if (characters[i][value] === chosen) {
  //       // res.send(characters[i].characters[i][value])
  //       // res.send(characters[i])
  //       console.log(characters[i]);
  //     }
  //   }
  // }

  for (let i = 0; i < characters.length; i++) {
    for (let value in characters[i]) {
      if (characters[i][value] === chosen) {
        // res.send(characters[i].characters[i][value])
        // res.send(characters[i])
        // console.log(`chosen: ${characters[i]}`);
        console.log("chosen: ", characters[i]);
        
      } else if (characters[i][value] === name) {
        console.log(`name: ${characters[i]}`);
      }
    }
  }

  res.end();
});


// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
