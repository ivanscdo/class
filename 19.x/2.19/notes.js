// reviewing es6
// refresher and new things, go over react at high level

// 6:51 
// new variable declarations
// let block scope, var anywhere this avail, const cannot change
// let allows things to stay within scope so they don't leak, for ex in for loop
// ???primitive values???
// const cannot be redlacared, but can be modified, const array, can push
// pretty much only use let

// 13:22
// backticks
// template literals
// can use whitespace and interpolate variables
// can set up templates and functions
// can write html inside backticks
// can also write sql

// 16:40
// console.log("Hello".includes("e"));;
// don't have to use indexof and check of -1
// .includes will return true or false if it is included or not

// 18:00
// new array methods
// higher order methods present in other lang
// array.forEach( (item, idx, arr) => { console.log(item, idx); })
// forEach() essentially for loop, steps through 
// words.map( (item, idx) => { return item.toUpperCase() } )
// steps through array and does something
// good for plucking keys off item, where you want 
// takes each item, then return sometihng for each item

// 25:00
// .some()
// numbers.some( item => item > 5 )
// checks each item in array and if any match criteria, then returns true, if none false
// if one or more items match a given set of criteria

// 28:45
// array.every()
// similar to some, but matches every item

// 30:00
// array.filter()
// unlike map or forEach, returns subset of array instaed of all array
// can filter an array based on some criteria
// returns subset of existing array
// none of these methods edit existing array

// every & sum return boolean, some - match true if some matched, every - true for everything matched, filter - subset of array, only true for what I set true for

// 35:xx
// array.find()
// returns first item in the array

// 38:xx
// .reduce()
// unlike others, always takes two arguments 
// .reduce(carry, next)
// takes array and reduces to single value
// .reduce(start, add)

// 43:xx
// reduce with strings
// return could be array, object
// takes array and returns it into one value

// 45:15
// arrow functions
// const b = () => 5
// cons c = function() { return 5; }
// anything after => will get return
// if block {} after =>, will need to manually type return
// () if no arguments, if single argument can omit ()

// 53:40
// lexical scoping
/*
this.a = "5";

let d = () => {
    console.log(this.a);
}

let e = function() {
    console.log(this.a)
}

d(); (returns 5)
e(); (returns undefined)

*/

// arrow function does not change the scope
// declaring a new function creates a new scope
