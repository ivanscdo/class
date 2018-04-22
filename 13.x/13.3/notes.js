// express j web framework of choice
// web framework 0 pack we sintall gives un func out of box, and extend to create web app
// similar to bootstrap to css, express to node.js

// create generic server
// express GET route
// Post route

// refresh: 
// server: 
// listen, url prase, route handling, send hteml, send JSON, receive POSTS SERVER SIDE LOGIC
// 9:XX

// express js
// built server, using httml module in node
// express de facto standard 
// been around since node infancy, still power
// meteor, sales also powered by express 

// express js
// gives scafolding for you to build whatevr, does not give decisions like ember/angular, gives barebones 
// created by tj holloway chuck

// route: like giant switch, get URL do specific action on URL
// basically route is a specific response to spefici url, feed in url, do specific action
// response to given URL calls
// routes api of app, only publlic thing user can inteact with

// mongo sracper/saved, get saved page, responds with html
// bedhin scenese, sending api response, responding with json, apps might have multple type of routes, respond with html or json, not just loading a page, real time fetching of data
// at it's core, express makes it simple

// clicking saves, sends msg to server, to save, POST request, sending data to server that the server needs to save
// need some type of response, sending empty is not ideal

// make sure entry point: (index.js)

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get (
    "/hello",
    (req, res) => res.send("Goodbye!")
);

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// at tis core... 23:16
// app.get takes two parameters, url and action that you're responding with


// app working on star wars app, characters mapped to file
// req express, var app calling func, set port to 3000, define characters(obj)
//start server: from term running file "node <name of file>", npm install express first!!

//look at req.params func, figure out!

//colon signifies paramert in URL, can be anything we want
//characers is a parameter, can pull it out of req.paramrs.characters, matches nam and can pull out

app.get("/:character/:name", function(req, res) {
    var chosen = req.params.character;
    var name = req.params.name;
  
    // What does this log?
    console.log(chosen);
  
    res.end();
  });

  // migjt had id/data/name of articale as last parameter, matching then pull the correct

  // /:characters? optional parameters, dont do it! be explicit!
  //45:xx??

  //take a lok at code flagged, figure out what it does

  // don't do optiona routes with "?"
//ex: 54:xx



//post routes!! 58:xx
app.post("/api/new", function(req, res) {

});


//aoo.use way to incldue middle ware, set up things to run every simple req that comes in, able to modiy variables (req, res), to do different things

// returns function, runs middle ware stack, parses out data from req obj

// takes all data, parses out body of post method, so we have req.body in function... get obj out instaead of silly post data
// app.use() takes req and res, passes  throgh different 

//post is handled programatically, ajax, sbmit on form

//slacked file, run postman requests from postman



//1:14:42

// how to use: type in url
// body: raw
// paste in JSON

//1:33:xx
//body parser makes it super easy, looks at whats coming in, automatically parses it, then can access on req.body
// if specific type, then use specific things 
//body parser specifcy what its going to accept

//another pack, path, allows to easily biuld paths to different url's on server

res.sendFile(path.jion(__dirname, "view.html"));

// __dirname directory name, where file was ran from
// creates path from those two parameters

//1:46:xx
// json vs readfile

//display html when user types in url
//json when make api request

//want to keep them different, 
//ex: build api for store, api decoupled when released mobile app, release apis not double work, by decoupling able to use data routes as data routes, without having to rewrite logic

// demo final app 1:50:xx

//if refresh, go to console settings log xml http equest, refresh, what can do, every time ajax rea happens, console will log: .. click, go straight to data, great for debugging

// if hate restarting server: install global pack, nodemon "npm install -g nodemon", rs to restart, change files, authomatically restart server, 
//supervisor, nodemon



//final copy of star wars app, figure out what is going on in add.html final

      //sending ajax post request!!
      $.post("/api/characters", newCharacter)
        .then(function(data) {
          console.log("add.html", data);
          alert("Adding character...");
        });
    });
//axios for get/post request
//jquery used for ajax calls

// jquery giant library that 9



// heroku built on top of aws, partitioning server etc, just push code to github, heroku will read it
// 2:24:xx

// heroku git: remote -a <file>

// git remote heroku <url>
// push to master

// heroku gives free hosting, limited resources, gotchas: taking forever to load, can only have 5 apps, cool: can start on free tier, scale up as you ned to do it, commit resrouces currently able to comitt

// git push heroku master:


//heroku log