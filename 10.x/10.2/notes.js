
// let fs = require('fs');

// fs.writeFile("things.txt", "Hello World", function (err, data) {
//     if (err)
//         return console.log(err);

//     console.log("File written successfully");

// });


// let fs = require('fs');

// fs.writeFile("things.txt", process.argv[2], function (err, data) {
//     if (err)
//         return console.log(err);

//     console.log("File written successfully");


//     fs.wreiteFile("things2.txt", process.argv[2], function (err, data) {

//         if (err)
//             return console.log(err)
    
//     });

// });

//promise value that gets returned, that promises we'll get a future value back
//promises are a standard, ex after ead file run http reqeust, all your return data has to be is promise

// let fs = require('fs-extra');

// fs.writeFile("things.txt", process.argv[2])
//     .then(function(){
//         console.log("Wrote file successfully");

//         return fs.writeFile("things2.txt", "some data");
//     })
//     .then(function(){
//         console.log("Wrote second file");
//     })
//     .catch(function(err){
//         console.log(err);
//     })

//similar to jQuery, .then or .done, fs.write returns prmosie we can then chain off of that
//need to be using fs-extra which we wil install


//npm init

//declares dependencies in project, installs all dir's needed
//if can't find most likely on fs but called different on fs-extra

// let fs = require('fs-extra');

// fs.writeFile("things.txt", process.argv[2])
//     .then(function(){
//         console.log("Wrote file successfully");

//         return fs.readFile("things.txt", "utf8");
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// will not get back datat, but a buffer "i get this collection of characters", must pass file encoding utf8
//not like json, must be a lot most explicit to get information
//if using specific package, and ex: wnat to know how to read file...

//arrow function, does not change the outer score, this value outside, arrow funciton preserves, does not change score to what would ahve been window in browser
//item implicitly returned, happens if all on the same line
// //arrow function are not verbose, no return fucntion, can put them on one lne, sugar except do not change this scope

// fs.readFile("best_things_every.txt", "utf8")
// .then(data => {
//     let things = data.split(",");
//     things.forEach(item => console.log(item))
// })

// fs.readFile("best_things_ever.txt", "utf8")
// .then(data => data.split(",").forEach(item => cosole.log(item)))

//strong factor for arrow function, small pieces, allows to quickly return stuff without having to write, 
//if want to preserve this value, use arrow

// car a =9;
// let myobj = {
//     a: 5, 
//     scopedfunction: function(){
//         sonsole.log(this.a);

//     },
//     unscopredFunction: () => {
//         console.log(this.a);
//     }
// }

// myobj.scoredFunction();
// myobj.unscopredFunction();

// () => {}
// function(){}.bind(this)

//writeFile overwrites
//fs.appendFile appends upstff
//when to return promise, how to go about chaining

//1:33:22
// let fs = require("fs-extra");
// let argument = process.argv[2];

// fs.appendFile("things-list.txt", argument)
// .then( () => fs.readFile("things-list.txt", "utf8") )
// .then( data => console.log(data) )
// .catch( err => console.log(err) )

// .reduce() ex 2:10:00


//options object for parsing
//a lot of parsing libraries, right now json, but can import that library and use different parsing method
//node is un oppiniated, power in our hands
//could make reeust from clietn or server, comes odwn to what we need to do, if need to edit first, do it on server, 

//using anything with Sync defeats purpose of using node!!