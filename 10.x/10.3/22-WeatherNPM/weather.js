// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");
////goes to node modules and finds package
//// let city = process.argv[2],
////     state = process.argv[3];
let cityState = process.argv[2];


// Then we use the package to search for the weather at a location
//// weather.find({ search: city+state, degreeType: "F" }, function(err, result) {
weather.find({ search: cityState, degreeType: "F" }, function(err, result) {
  
  ////running http request for us
  ////func is callback, takes two things, error and data that we want to use

  // If there is an error log it.
  if (err) {
    console.log(err);
  }
  ////if there is an erorr, then console.log
  ////proper thing is to return to stop function, don't want to write to database if error

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(result, null, 2));

});
