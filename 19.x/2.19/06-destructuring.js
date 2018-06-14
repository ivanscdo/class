// 1:13:xx
// array destructuring
// destructing allows destructure array and obj; array - index, obj, key

// let [a, b] = [1, 2];
// console.log(a, b)

// let [a, b, , , , c] = [10, 2, 5, 6, 7, 99];
// console.log(a, b, c);



// ... : rest/spread operato
// (ruby: gather/splat operator)
// pack or unpack array into or from arguments
let [a, b, ...c] = [10, 2, 5, 6, 7, 99];
// ^gathering as rest operator
// console.log(a, b, ...c);
// ^spreading as spread operator

let d = [1, 3, 5];
let e = [...d, ...c];
// console.log(e);

let f = [...e];
// console.log(f)

// copies values into new array


// 1:21:11
// object destructering
// match var name we're declaring to var we're setting equivalent to
// allows pluch keys from object

let {
    name, 
    age
} = {
    name: "tim", 
    age: "99"
}

let myOptionsFunc = function({name, url}) {
    // console.log(name, url);
};

myOptionsFunc("text", {
    name: "tom",
    url: "tim.com"
})

// console.log(name, age);


// 1:24:xx
// can now specify default parameters

let myOptionsFunc2 = function(label = "red wine, success!") {
    // console.log(label)
};

myOptionsFunc2();
// can call func with nothing, will get "red wine, success" 
// call func wtih something, will get something
// can get default arguments
// need to be at end of function
// 1:26:xx
// further step: set up object destructering with default values

let myOptionsFunc3 = function({ name, url } = { name: "tim", url: "tim.com"}) {
    console.log(name, url);
};

// myOptionsFunc3();
myOptionsFunc3({
    name: "tom", 
    url: "tom.com"
});
// very heavily used for imports!!