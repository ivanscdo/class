const weather = require("weather-js");

class UserSearch {
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.date = Date.now();
    }

    getWeather() {
        weather.find({ search: this.location, degreeType: "F" }, (err, result) => {
            if (err)
              console.log(err);
     
            // console.log(this.name);
            console.log(JSON.stringify(result, null, 2));
          });
    }
}

module.exports = UserSearch;