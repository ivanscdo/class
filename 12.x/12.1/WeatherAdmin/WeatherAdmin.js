var fs = require("fs");
var userSearch   = require("./UserSearch.js");
var location = process.argv[3];
var name = process.argv[2];
 

class WeatherAdmin {
    // constructor(name, location) {
    //     this.name = name;
    //     this.location = location;
    // }

    newUserSearch(name, location) {
        let newUserSearch = new userSearch(name, location);
        fs.appendFile("log.txt", JSON.stringify(newUserSearch, null, 2), (err) => {
            // if (err) {
            //   console.log(err);
            // }
          
            // else {
            //   console.log("Content Added!");
            // }
            // newSearch.getWeather();
          
          });
    }

    getData(callback){
        callback();
        fs.readFile("log.txt", "utf8", function(error, data) {
            console.log("1:", data);
          });

    }
}

let weatherTest = new WeatherAdmin()

weatherTest.newUserSearch(name, location);



module.exports = WeatherAdmin;