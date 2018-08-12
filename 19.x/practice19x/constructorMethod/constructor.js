class Rectangle {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }
    get area() {
        return this.calcArea();
    }
    get h(){
        return this.height;
    }
    get w() {
        return this.width;
    }
    calcArea(){
        return this.height * this.width;
    }
}

// const square = new Rectangle(10, 10);

// console.log(square.h);
// console.log(square.w);
// console.log(square.area);

module.exports = Rectangle;
