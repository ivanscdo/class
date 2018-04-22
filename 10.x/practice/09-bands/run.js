let bands = require("./bands.js");

for (let genre in bands) {
    // console.log(bands[genre]);
    console.log(`A ${genre} band is ${bands[genre]}`)
}


// //bonus
// let bands       = require("./bands.js"),
//     userGenre   = process.argv[2];

// if (userGenre) {
//     // console.log("red wine, success!")
//     switch (userGenre) {
//         case "punk":
//             console.log(`A ${userGenre} band is ${bands[userGenre]}`);
//             break;
//         case "rap":
//             console.log(`A ${userGenre} band is ${bands[userGenre]}`);        
//             break;
//         case "classic":
//             console.log(`A ${userGenre} band is ${bands[userGenre]}`);
//             break;
//     }

// } else {

//     for (let genre in bands) {
//         // console.log(bands[genre]);
//         console.log(`A ${genre} band is ${bands[genre]}`)
//     }
// }