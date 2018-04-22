function testReturn(x, y){
    // var sum = x + y;
    
    
    // return sum;

    // var test = x - y;
    // return test;

    if (x !== y){
        // return console.log("does not equal");
        var sum = x + y;
        return sum;
    } else if (x === y){
        return x*y;

    }


}
console.log( testReturn(2, 2) ) ;

