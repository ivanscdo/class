// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_chirpy", "root", "password", {
  host: "localhost",
  dialect: "mysql", // figures out what it can and can't do
  pool: { // don't need to worry too much, doing: what kinda conn pool, when run conn tell to connect to db, latency when we tell it to connect and when it connects, pool allows some connections open, so can reuse conn on subsequent connections, max of 5, min of 0 can close out all, idle waits throws away after 10 sec, max 5 will open 5 and stay open
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;


// entire file is boiler plate