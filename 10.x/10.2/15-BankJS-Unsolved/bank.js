let arg = process.argv, 
    fs  = require("fs-extra");

fs.readFile("bank.txt", "utf8")
    .then(function(data){
        // console.log(data.split(","));
        let bankArray = data.split(","),
            // bankTotal = reduce( (accumulator, currentValue) => accumulator + currentValue );

            bankTotal = bankArray.reduce( (accumulator, currentValue) => accumulator + currentValue );

            console.log(bankTotal);




    });