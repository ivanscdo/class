


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get("/", 
exports.add = function(req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    // res.send(parseInt(req.params.num) + parseInt(req.params.othernum))

        res.send( parseInt(req.params.num) );

    
    
  };
  
//   app.get("/add",
exports.subtract = function(req, res) {
    // res.sendFile(path.join(__dirname, "add.html"));

  };
  

//   app.get("/api/characters",
exports.multiply = function(req, res) {
    // return res.json(characters);
  };
  

//   app.get("/api/characters/:character",
exports.divide = function(req, res) {



  };
  
