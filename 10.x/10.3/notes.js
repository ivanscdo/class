//warmup commandsort
// console.log (
//     process.argv
//     .slice(2)
//     .map( num => parseInt(num) )
//     .sort( (a, b) => a > b)
// );

// //es5
// console.log(process.argv.slice(2).sort(function(a, b) {
//     return parseInt(a) > parseInt(b);
// }));

//natSort package?

// .map takes each item and return another array
//process.argv is an array that contains all the "user input"


//refresh on request package
//call back function style, func as second parameter of request
//will always get error first, then whatever response they get
//write functions as if they're going to handle every single case

//request promise example

// var request = require("request");

// request("http://www.omdbapi.com/...")
// .then(data  => {
//     data = JSON.parse(data);
//     console.log(`The movie's rating is ${data.imdbRating}`) 
//     //^called string template, also interpolation
// })
// .catch(err => console.log(err));

//npm
//i is short for install
//dependencies will automatically get installed
//in package.json, when run instal will run latest stable version, when update can change numbers, or npm update
//name must be unique
//version x.x.1 third version only for bugs and changes that do not manke breaking changes, ^ means use any version up to 
//minor version number x.1.x 
//major versions, 100% broke everything changed api, will expect things to break
//description: description of package on npm
//main: when say require that's the one that it will include
//scripts: allow you to run actual commands from terminal
//keywords: for searching on npm
//author: my n ame
//license: how people are allowed to use project, "MIT" do whatever "ISC" more restrivtive, "I own this", open source "MIT", not open source will not publish file, MIT or GPL is open, not open source most people will not see code
//dependencies: when install stuff, that's what gets installed
//request promise uses request, but does not include the package itself, will need to install request

//all these installs are per project!!!
//way to organizing?? yes, once we get to web server, normally a folder to hold everything, then src for web server code

//when require npm package, it will look for that package, ./ used for internal files


//npm is one stop shop for single package, just require package and will work as long as api guidelines are followed
//npm gives centralized depository 


//geocoder activiy

//install geocoder, uses google maps location(?) function


//notes on weather & geocode

//package-lock.json locks specific versions of packages


//steps
//1: npm init
//2:npm install
//1:55:xx weatherdest


//inquirer

//38:xx (second vid) for gotcha on scopes/second promise/questions

//how to inspect
//ensure package.json and modules installed
//npm install -g inspect-process
//can run inspect on given file, stops at bdebugger, see values for things in scope
//run: inspect <file name>