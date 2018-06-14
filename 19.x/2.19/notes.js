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


// 1:09:30
// solution: 108-Stu_ArrowArrays-Unsolved

// 1:39:xx
// solution: 109-Stu_ObjDestruct-Unsolved

// 1:39:xx
// babel
// turns es6 into code we can use in every browser
// babel -node index.js --presets env,stage-2

// no longer using require, but import
// in past use module.exports, export default is what we will get when we import
// exports get created into obj



// 2:18:xx
// react
// front end framework for web applications
// any big app, instead of going to page to page, url might update, but still on same page, facebook, google, etc; react makes it super easy
// stop thinking of page of something we interact with
// think of it as: design & specify what UI should look like, as state of app updates, UI automatically reacts to that, and models that state in UI; build model, have state, when somebody does this action then update the state in this way, because state updates, UI updates, not because user clikced button, bc state updated; think of UI as one wholeistic thing relying on state

// at it's core it is: components, props, states

// angular was like react lite
// every library borrows from react

// developed at facebook
// can handle bunch of data updates, data constantly changing
// relised on component-based architecture

// 2:30:xx
// components
// breaking down into different pieces, sizeable components; know exaclty what each piece is responsible for; easier to test; helps find bugs and save time

// keeps virtual DOM, reacts version of the DOM kept internally; keeps watch, only updates DOM when it needs to be updated; serves as intermediary

// 2:40:xx
// virtual dom
// sits there, waits, updates only when it needs to

// pros/cons
// pros
// component-based architecture
// reactively updates
// build apps on web, server, and native apps
// easier, more popular than others
// cons
// view library, still need other libraries, axios etc
// requires more configuration; no cnd link

// to get started: need build system
// babel
// webpack-module bundler

// 2:46:xx
// demos
// jsx
// write html as if writing js
// used to be a time when everything written as html and style tags (css)
// seperation of concerns: all files in different folders
// vs seperattion of technologies
// with react, interaction of page integral part of how UI represented; show how html and js interact

// 2:50:xx
// props and states
// only two ways component knows what it is
// state - self contained inseide each ocmponent
// each componetn has a state, can modify its own state, but cannot modify other components
// props passed down from parent component, are immutable; until prop changes from parent, thats all data working with
// pass props much like attributes in html
// ex: clock, part of app, pass component of current/starting time; idea: pass prop from app to clock, now a prop on clock, prop will not change until app decides to change prop
// have components, like html elements, are hierachy, app has child of clock, clock children of hands, hierarchy like html tags
// self containted, can take props from parent, 

// 2:54:xx
// state
// internal, update inside of component
// props passed down to component
// shouldn't change props