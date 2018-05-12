// errores:

// try catch: if error in try block, catch that error and continue going
// only se things we doing have contorl over
// ex: cli pushed to npm, try catch makes sense to see if eror then deal with it and tell them
// ex: mysql

// start timer 6:37

// in general wrap logical around to make sense hit no errors
// different syntax

// can use .catch whenever we have .then
// User.findAll().then.catch(err => console.log(err));
// will catch: latency errors with db's, no control whether or not something might error
// Burger.findAll({}).then(data => console.log(data)).catch(err => console.log(err));

// solution: 13:xx
// at it's core it is a unit test, although vague/generic
// fnc checks what happens with other func


// 18:xx
// install globally: mocha & chai
// toungue and cheek: run for so long you could run and grab coffee
// mocha: 
// framework around unnign test, group, run states, map correct output

// dev dependncies
// automatically installed unless speciy not to
var expect = require("chai").expect;

var multiply = function(x, y) {
    if ()
}
// same func as 02

// describe blocks should be wrapped around one peice of fucntionlality
describe("Multiply", fuction() {
    it("should multiply propery")
    expect()
    // expect result of 2*4 to exqual 8, expect it to do somehting specifc
})

// run mocha, go to multipl js folder, runs funcs
// descrption is the header, insdie are tests we ran
// what we expect behavior to be, then run tests to ensure that happens, make sure if unit of code doing what we expect
// do it before writing code to tests
// est driven dev
// ideally:write when get spec for functions should be
// only test public stuff, if other function not publically accessible 
// test things that you touch a bunch
// 100% in google, but less in other 
// mocha running from command line, chai is being required
// unit testing helps us break out packages down to workable bits, 

// solution: 48:xx
// tests not included in file/package we are testing, in it's own dir/file
// testing solidifies what requiemnts are, "do we need to solidify these edge cases"

// PROJECT 2
// 52:xx
// ambitous and think of real-world problems to solve, unique/creative not a clone
// project work is best tool to show off to employers!
// certificate gets in te door, projects get the job!


// node/expres
