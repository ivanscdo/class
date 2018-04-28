import { RSA_PKCS1_PADDING } from "constants";

// working more with express, melding with node/mysql
// handlebars
// math calculations on url

// myswl+XPathExpress

// require express, mysql
// va connection = mysql
// conenction.connect

// routes
// app.get(...) {
    // RTCPeerConnection.query("..."", function(err, results) {
        // if (err)
        // throw err;
        // var html = "<h1> Margical SChools"
// }



// res.send(html) inside connection.query because it is an asynchronous action and we are waiting for the response to get in before sending in the action

applicationCache.use(function(req, res, next) {
    req.db = conneciton;
    next();
});

require("<req.db file>")(app);

// req.db.query("SELECT...", ...)





// HANDLEBARS 1:14:xx


var exphbs = require("express-handlebarvs");

// sytanx similar to other templating langs, commonly used, others look exactly like it

app.engine("handlebars", exphbs({dfaultLayout: "mai" }));
app.set("view_engine", "handlebars");
// sets config values in express, config value is view engine set to handlebars

var lunches = {
    key: value
}

app.get("/weekday", function(req, res){
    res.render("index", lunchs[0]);
})

// grabs lunch value an inserts to template .html
// layout
// main.handlebars creates layout, insert {{{body}}} takes content from template we chose and...

//header persists "Food Things" in layout file that is being served

/lunches
res.rendder("all-lunches", )
// passing in array of lunches

// {{lunch}}

// double vs triple curly braces

// double prevent malicious script tags
// tirple need to actually render html
// if double on triple, escape everyhting and write html to page
// express sets up structure, all handled by express

// layout parent, houses



// BEN AND JERRY SOLUTION 1:51:30