var fs = require("fs");
    // best = require("./best_things_ever.txt");


fs.readFile("best_things_ever.txt", "utf8", function(error, data){
    if (error) {
        return console.log(error);
    }
    // console.log(data);
    var dataArr = data.split(",");
    // console.log("red wine, success:", dataArr);
    for(let i = 0; i < dataArr.length; i++) {
        console.log(dataArr[i]);
    }

});