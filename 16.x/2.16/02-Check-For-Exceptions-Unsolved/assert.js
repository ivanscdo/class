var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  // If an error is thrown, set threw to true
  func(x, y);


  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

try{
  assertThrows(func);
}
catch(err) {
  threw = true
  console.log("threw = true");
}



var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  // if (typeof x === "integer" && typeof y === "integer") {
  if (typeof x !== "number" && typeof y !== "number") {
    
    // throw an error if either x or y is not a number
  }
  else return x * y;
};

try{
  multiply("w", 2)
}
catch(err){
  console.log(err);
}
