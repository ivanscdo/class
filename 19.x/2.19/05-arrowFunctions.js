// 45:00
// arrow functions
// implicit return - when only using one expression, don't need curly braces, or to explicitly say: return this

const b = () => 5;
// returning 5, but can return array, func

// returning func
const d = () => () => 5;

// long form
const c = function() {
    return 5;
}

// using curly braces
const e = () => {
    return 5;
    // need to manually return something (type return)
}

// console.log( b() );
// console.log( c() );
// console.log( d() );
// console.log( e() );

// single paramter, don't need ()
const f = param => param.map( num => num * 2);
// console.log( f([1,2,3]) );


// 53:xx
// lexical scoping

this.a = "5";

// arrow func, no new scope, can access this.a
let g = () => {
    console.log(this.a);
};

// because of function keyword, new scope, cannot access this.a
let h = function() {
    console.log(this.a)
};

g();
h();

// when new func declared, new scope created

// used to have to do following to bind this to new func/new scope
let i = (function() {

}).bind(this);
