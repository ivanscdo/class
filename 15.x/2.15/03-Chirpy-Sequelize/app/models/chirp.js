// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.

// var sequelize = require("../config/connection.js");
var schema = require("../config/connection.js");


// Creates a "Chirp" model that matches up with DB
var Chirp = sequelize.define("chirp", {
  author: {
    type: Sequelize.STRING //setting type of values
  },
  body: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false // if set to true, will auto keep track of created_at and updated_at column, created-when someone created, updated_at-every time updates
});

// Syncs with DB
Chirp.sync();
// sync

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;
// exports