var     weatherAdmin = require("./WeatherAdmin.js"),
        userSearch   = require("./UserSearch.js"),
        location = process.argv[3],
        name = process.argv[2];
        test = new userSearch(name, location);
        
// let test = new userSearch(process.argv[2]);
test.getWeather();