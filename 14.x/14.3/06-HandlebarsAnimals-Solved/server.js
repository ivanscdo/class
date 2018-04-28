var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

//array with pet flag of tru or 

app.get("/dog", function(req, res) {
  // settting up route that listens to /dog, sits and listens auntil hit, goes res.render, looks in views, finds dog.handlebars, have anytype, pet, and fircemness as keys, three keys defined in object, takes values, inserts directl into template


  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].animalType === "dog") {
      return res.render("dog", animals[i])
    }
  }

});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].pet) {
      return res.render("pets", animals[i])
    }
  }
  //loop through animals array, find which 
  //can also use filter:
  animals.filter(item => item.pet ? true: false);
  //higher order functions, filter map, reduce, cuts dwn on code
  //once we get data get array, pass through index, index is looping thorugh the animals, similar to dog, looping thorugh each one and outputting in li



});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.

  var data = {
    anims: []
  };
  //anims is key, for .handlebars to hok into, template has to be keyed

  for (let i = 0; i < animals.length; i++) {
    if (animals[i].animalType === "dog" || animals[i].animalType === "cat") {
    } else {
      return res.render("nonPets", animals[i]);      
    }
  }

  //for loop and $each
  //tellnig how waht data to work, still need to get data together and pass, packs and unpacks for user
  // passing ifnished data, get ready, then pass to handlbars to render, res. render cna only be done once

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
