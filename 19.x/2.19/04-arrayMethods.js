let words = ["The", "Quick", "Brown", "Fox", "Jumped"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// array.forEach()
// steps through every item, basically for loop

// numbers.forEach( (item, index, array) => {
//     console.log(item, index);
// });

// let newArr = words.map( (item, index) => {
//     // return item.toUpperCase();
//     return 1;
// });
// console.log(newArr);

// each item goes in, returns new item
// doing something with items, returns specific things

let myObjects = [
    {
        name: "Tim", age: 11
    },
    {
        name: "Tom", age: 22
    }
]

newArr = myObjects.map(item => {
    return item.age;
})
// plucking keys off items, same lenght of array, but want one value

newArr = numbers.map(num => num * num);
// console.log(newArr);


// array.some()
// boolean check on test given
// console.log(numbers.some(item => item > 5));
// console.log(
//     words.some(item => {
//         return item.includes("e");
//     })
// );



// 28:55
// array.every()
// 

// console.log(
//     numbers.every( (item) => {
//         return item > 0;
//     })
// );

// console.log( numbers.every(item => item % 2 === 0) );

// some - checks if anything matches
// every - checks if everything matches



// 30:00
// array.filter()
// takes array, method on array, get item, 

let filtered = numbers.filter(  item => {
    return item % 2 === 0
});

// console.log(filtered, numbers);

// filter returns subset of array, instead of array
// basically for each loop, but nicer ways to do it
// array.method(item, index, array) for all


// console.log( words.filter( (item, index) => {
//     if (index ===0)
//         return false;

//     return item.includes("e");
// }));

// 34:xx
// recap of methods
// filter, every, some
// every & some return boolean value based on criteria
// some - will match if some of item returned true
// every - match if every item returned true on
// filter - return subset of array, only ones used true for


// 35:xx
// array.find()

// console.log(
//     words.find( item => {
//         return item.includes("e");
//     })
// );

// quick way to serach through array to find speficic value

// 38:38
// array.reduce()
// takea array and reduces to single value

// console.log(
//     numbers.reduce( (carry, next) => {
//         console.log(carry)
//         return carry + next;
//     }, 50)
// );
// // starts at second arg 50 (initializer)

// console.log(words.reduce((carry, next) => {
//     return `${carry} ${next}`
// })
// );