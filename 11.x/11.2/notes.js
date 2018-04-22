//hw
//create word gues or hangman in terminal
//constructors to build words! instead of array

//INHERIENCE
//how to use different obects to inherent to build upon, function prototypes or mixins
//classes

//dog-casses.js!!!

// class Mammal {
//     constructor( hasHair ){
//         this.hasHair = hasHair;
//     }
//     hasHair(){
//         return this.hasHair;
//     }
// }

// class Dog{
//     bark(){
//         console.log("woof!");
//     }
// }

// let myDog = new Dog(true);

// console.log(myDog.hasHair());

// class Mammal {
//     constructor( hasHair ){
//         this.isHairy = hasHair;
//     }
//     hasHair(){
//         return this.isHairy;
//     }
// }

// class Dog extends Mammal{
//     constructor(name, hasHair){
//         super(hasHair)

//         this.name - name;
//         //super is reference to parent class, call supper pass in, then gets them
//     }

//     getName(){
//         console.log(this.name);
//     }

//     bark(){
//         console.log("woof!");
//     }
// }

// let myDog = new Dog("sophie", true);

// console.log(myDog.hasHair());

// class Mammal {
//     constructor( hasHair ){
//         this.isHairy = hasHair;
//     }
//     hasHair(){
//         return this.isHairy;
//     }
// }

// class Dog extends Mammal{
//     constructor(name, hasHair){
//         super(true)

//         this.name - name;
//         //super is reference to parent class, call supper pass in, then gets them
//     }

//     getName(){
//         console.log(this.name);
//     }

//     bark(){
//         console.log("woof!");
//     }
// }

// class Whale extends Mammal{
//     constructor(breed){
//         super(false);

//         this.breed = breed;
//     }
//     getBreed(){
//         console.log(this.breed);
//     }
// }

// class ORca extends Whale{
//     constructor( ){
//         super("orca);")
//     }

//     someOtherMethodHEre(){

//     }
// }

// let myDog = new Dog("sophie");

// console.log(myDog.hasHair());

// myDog.getName90;
// myDog.bark();

// let myWhale = ;

// //less specific objects to more specific 
// //class self contained state
// //feed somehting in, get something out
// // class & constructores creating a new type that can use throghout app


// //built in types

// var obj = {};
// var obj = new Object();

// var str = "";
// var str = new String();

// console.log(str);


// //using construtors under the hood
// //"everything in js is objects"

// var arr = [];
// var arr = new Array();

//classes dont have multiple inheritence 
//use: few and far between, anti pattern



//dog-prototype.js
// function Mammal(isHairy){
//     this.isHairy = isHairy;
// }

// //not defining any of the methods

// Mammal.prototype.hasHair = function() {
//     return this.isHairy;
// }

// //every object in js has a protytype
// //prototype poitns to bobject from where it came

// //any thing that in inherets can access anytihng on prototype

// function Dog(name, isHairy){
//     this.name - name;
//     this.isHairy = isHairy;

//     this.bark   = function () {
//         console.log("woof!");
//     }

// }

// //not passig anything to super or obect

// Dog.prototype = Object.create(Mammal.prototype);

// //making dog inheret from mammal

// let myDog = new Dog ("sophie", true);

// myDog.bark();

// console.log(myDog.hasHair());

// //if no classes, this is what you wold do ^^
// //gotchca with prototypes: 

// Mammal.prototype.saySomething - function () {
//     console.log("Heres a thing");
// }

// // myDog.saySomething();
// myDog.hasHair();

// //reason: when you call something from ocnstructor in js, first goes and lookss at wown prototye, then goes up to mamael.prototye, say something? if so runs function
// //expect to see methods going to have to use

// //can override
// //proper way is to change origican function, 

// Mammal.prototype = [
//     hasHair(){

//     }, 
//     has
// ]

//will likely not need to use prototype
//popular intwer

// object protype type can inherent from constructo, method or object
//prototypical inheretence
//"diffent standards..."
//<30:37>



//everything is object, everything has prototype
//DO NOT DO THIS!!!
// String.prototype.changeToWhatsUp = function (str){
//     console.log("Whats up");

//     return "whats up";
// }

// console.log( "".changeToWhatsUp() );

//INSTEAD:
//create constructor then pass those methods
//don't mess with built in prototypes, use methods


//COMPOSITION
//preferred way of doing object inherence
//diff: comp and inh
// comp take a bunch of properties, takes current stage
// //inh takes on object takes direct from object

// function Person(){
//     this.hobby = hobby;
// }

// function Programmer(favoriteProgrammingLanguage){
//     this.favoriteProgrammingLanguage = favoriteProgrammingLanguage;

//     this.programs = function(){
//         console.log("is getting tired");
//     }
// }

// function Chase(hobby, favoriteProgrammingLanguage) {
//     Person.call( Person, hobby);
//     Programmer.call(this, favoriteProgrammingLanguage);

//     this.isWearingHat = function() {
//         return false;
//     }
// }

// let thisChase = new Chase( "Watching TV", "Javascript");

// //this.call allows to invoke function...

// console.log(thisChase);

// thisChase.programs();

// //as close to multiple inheretence in js

// //compose ultiple ufunction together to make one construction

// console.log(thisChase.isWearingHat())

//call to invoke any function 
//  console:
// <46:10>
// let logThis = function(){console.log(this, arguments) }
// logThis()

// logThis.call( {}, )

//can't include class from constructor, but can use constructor to compose things, then extend 

//INTERVEIW Q: comp vs inh?
//<48:46>


//INQUIRER WITH CONSTRUCTORS

//RECURSION
//one benefit; js compilier super good with ending functions!

