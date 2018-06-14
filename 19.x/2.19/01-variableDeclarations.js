let a;
const b = "a";
var c;

// let specifies block scoping
// anywhere this available, var available

// ex1
// {
//     let d = 5;
// }

// {
//     var d = 5;
// }
// console.log(d);

// ex2
// for (let i = 0; i < 10; i++ ){
//     console.log(i)
// }

// console.log(i)

// ex3
// b = c;
// cannot redeclared const, but can call things on it. 

const cars = [];

cars.push("miata");

console.log(cars);

const myFunction = () => {

}
// do not want to reassign something, once assigned to function, makes sense to declare func as const
// also works with js type: func, obj, array

