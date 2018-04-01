let fs = require("fs-extra");

fs.readFile("best_things_ever.txt", "utf8")
    .then(function(data){
        // console.log(data.split(","));
        let dataArray = data.split(",");
        for (let i = 0; i < dataArray.length; i++) {
            const element = dataArray[i];
            console.log(element);
            // console.log(dataArray[i]);
        }
    })
// fs.readFile("best_things_ever.txt", "utf8"