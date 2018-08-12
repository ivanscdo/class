const Rectangle = require ("./constructor.js");

class Square extends Rectangle {
    constructor (length) {
        super(length, length);
        this.height = length
    }
}

const square = new Square(5);

console.log(square.h);
console.log(square.calcArea());