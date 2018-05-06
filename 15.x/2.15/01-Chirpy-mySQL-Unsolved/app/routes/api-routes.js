// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {
  getAll: app.get("/", function(req, res) {
    connection.query("SELECT * FROM chirps", function(error, data){
      if (error) throw error;

      res.send(data);
    })
  })

  // Get all chirps


  // Add a chirp


};
