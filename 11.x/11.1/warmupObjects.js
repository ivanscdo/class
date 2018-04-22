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

function Animal (raining, noise) {
    this.raining = raining;
    this.noise = noise;

    this.makeNoise = function () {
        if (this.raining )
            console.log(this.noise);
    }
}

let cat = new Animal (false, "Meow");
let dog = new Animal (true, "Woof!");

dog.makeNoise();

//es6 only feature
//