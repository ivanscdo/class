let fs = require("fs");

fs.readFile("bank.txt", "utf8", function(error, data){
    if (error){
        console.log(error);
    }

    console.log(data);

    // let sum = data.reduce( (total, amount) => total + amount);
    // console.log(sum);
    


})