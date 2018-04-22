// // dogsObject = {
// //     raining     : true, 
// //     noise       : "Woof!", 
// //     makeNoise   : function () {
// //         if ( dogsObject.raining )
// //             console.log( dogsObject.noise );
// //         }
// // }

// dogsObject = {
//     raining     : true, 
//     noise       : "Woof!", 
//     makeNoise() {
//         if ( dogsObject.raining )
//             console.log( dogsObject.noise );
//         }
// }

// catsObject = {
//     raining     : false, 
//     noise       : "Meow!", 
//     makeNoise   : function () {
//         if ( !catsObject.raining ) 
//             console.log( catsObject.noise );
//     }
// }

// console.log( dogsObject.makeNoise() );
// catsObject.makeNoise;


//arrow function vs function literal
//function keyword bins this to object to which it belongs
//arrow func does not create a new scope, refers to file not object
//constructors turn file into something to reuse
//capitalize first letter, tells dev it is a constructor not func, doesn't do anything

// function Animal (raining, noise) {
//     this.raining = raining;
//     this.noise = noise;

//     this.makeNoise = function () {
//         if (this.raining )
//             console.log(this.noise);
//     }
// }

// let cat = new Animal (false, "Meow");
// let dog = new Animal (true, "Woof!");

// dog.makeNoise();

//es6 only feature
//a lot of languages operate using only objects, js does not have any OOP underpinning prototypical inheritance

class Animal{
    constructor( raining, noise ) {
        this.raining = raining; 
        this.noise - noise;
    };


    makeNoise(){
    if (this.raining )
        console.log(this.noise)

    };

}

let dog = new Animal (true, "Woof!");

dog.makeNoise();

//rpg.js
//var naming:
//numbers do not belong in var names!!
//if func returns boolean, us "is<file name>"
//things doing something should be named with verbs
//

//classes vs constructors 
//difference is syntax as far as laying out methods
//template literals useful for multiline strings
//for of loop
//allows you to loop over something that is an iterator
// //tuple array with two expected values
// for (let val of Object.entries(this) ){
//     console.log(val);
// }
//constructors all we had until recently
//classes front and center in other languages, instead of using syntactic sugar, push toward classes 


//can add new values, methods, etc by calling the new instance and setting the value/method/etc

warrior.defence = 25;
warrior.attack = function () {
    //attack opponent
}

let originalFunction = rouge.levelup.bind(rogue);

rougelevelUP = function () {

    originalFunction();
}

