// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================
function insertionSort(array) {

  for (let i = 0; i < array.length; i++) {
    var sortedArr = [];
    
    if (array[i] < array[i+1]) {
      sortedArr.push(array[i]);
      sortedArr.push(array[i+1]);
    } else {
      sortedArr.push(array[i+1]);
      sortedArr.push(array[i]);
    }
    
  }
  return sortedArr;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
