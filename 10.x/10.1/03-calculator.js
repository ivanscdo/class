

let arg = process.argv;

//add
if (arg[2] === "add") {
    console.log(parseInt(arg[3]) + parseInt(arg [4]));

} else if ( arg[2] === "subtract") {
    console.log(parseInt(arg[3]) - parseInt(arg [4]));

} else if ( arg[2] === "multiply" ) {

    console.log(parseInt(arg[3]) * parseInt(arg [4]));
    
} else if ( arg[2] === "divide" ) {

    console.log(parseInt(arg[3]) / parseInt(arg [4]));

} else if ( arg[2] === "remainder" ) {
    console.log(parseInt(arg[3]) % parseInt(arg [4]));
    
} else if ( arg[2] === "exp" ) {
    console.log(parseInt(arg[3]) ** parseInt(arg [4]));

    // 4x+2=10
} else if ( arg[2] === "algebra" ) {
    // console.log(parseInt(arg[3]) );
    console.log( ( parseInt( arg[3][5]+arg[3][6] ) - arg[3][3] ) / arg[3][0] );
    
}

