// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require('geocoder');




// Take in the command line arguments

let cityState = process.argv[2];



// Build your address as an array or string





// Then use Geocoder NPM to geocode the address

// Geocoding 
geocoder.geocode(cityState, function ( err, data ) {
    if (err) {
        return console.log(err);
      }
    console.log(data);
  });

  //npm init first

  let geocoder = require("geocoder");
  let address = process.argv.slice(2).join(" ");

  console.log("Searching for" + address);
  geocoder.geocode(
      address,
      (err, data) => console.log(JSON.stringify(dta, null, 2))
  );

  //bluebird package!!
  //if want to use promises, but package does not include them, can use bluebird
  //geocodeChallange-promises.js
