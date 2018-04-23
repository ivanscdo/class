// INTRO NOTES:
// express j web framework of choice
// web framework 0 pack we sintall gives un func out of box, and extend to create web app
// similar to bootstrap to css, express to node.js

// today: create generic server
// create express GET route
// create Post route
// understand hot to use AJAX to GET and POST data to server

// refresh: 
// server: 
// listen, url parse, route handling, send hteml, send JSON, receive POSTS SERVER SIDE LOGIC

// 8:47
// listen at given PORT and respond in kind
// parse the URL that comes in, URL where most of info comes from/what kinda data need served up
// handle routing
// sending html/json responses, receiving POST requests
// serveer-side logic

//servers are programs that are going to listen for someone to hit specific URL, respond with data

// express js
// built server, using httml module in node
// express de facto standard for web server in node js
// been around since node infancy, still powers most of web frameworks that run today
// other web frameworks like meteor, sales normally powered by express.js at low level bc express.js is usefull and extensible 

// what is express js?
//  web framework for node for creating much simpler server-side code
// gives scafolding for you to build whatever, does not give decisions like meteor/ember/angular, gives barebones code needed to start writing web server
// created by tj holowaychuk

// route: like giant switch, get URL do specific action based on URL
// basically route is a specific response to specific url: feed in url, do given action
// route is like a response to given URL calls
// routes are like api of app, only public thing user can interact with to get specific data from app

// mongo scraper/nyt app - saved, get saved page, responds with html
// behind scenes, sending api response, responding with json, apps might have multiple type of routes, respond with html or json, not just loading a page, real time fetching of data
// at it's core, express makes it simple

// clicking saves, sends msg to server, to save, this is using a POST request, sending data to server that the server needs to save, "hey here's the article ID that I need to save"
// in general, need some type of response from every AJAX req(every route), as simple as res.json true or fale to say if operation worked or not
// sending empty is not ideal



//  EXPRESSJS.COM/GETTING STARTED
// make sure entry point is index.js (it is by default)

const express = require('express')
//require express package
const app = express()
//calling func express provides

app.get('/', (req, res) => res.send('Hello World!'))
// req,res - provides different stuff, but at same time, exposes core node stuff, already using with server that can continue using here 

app.get (
    "/hello", //URL getting
    (req, res) => res.send("Goodbye!") //action responding with
);

app.get("/hello", (req, res) => res.send("Goodbye!"));

app.listen(3000, () => console.log('Example app listening on port 3000!')
)

// basically express cutting all weird switching, handling routing for us
// at its core, just mapping given URL to given action
// app.get takes two parameters, url and action that you're responding with
// can use "helper" func, like res.json, pass json

// app working on star wars app, characters mapped to file
// req express, var app calling func, set port to 3000, define characters(obj)

// start server: from term running file "node <name of file>", npm install express first!!



// ACTIVITY: server1.js
// app.get
// "gets" information from the URL that was requested



// ACTIVITY 2: server2.js >43:46
//look at req.params func, figure out!
//colon signifies parameter, by ising param, match it, return data from URL at that parameter
// id/data/name of article as last parameter, when go and match, pull one you want from database and show that data
// in URL, can be anything we want
//characers is a parameter, can pull it out of req.paramrs.characters, matches nam and can pull out

app.get("/:character/:name", function(req, res) {
    var chosen = req.params.character;
    var name = req.params.name;
  
    // What does this log?
    console.log(chosen);
  
    res.end();
  });

// /:characters? means optional parameter, dont do it! be explicit!



// ACTIVITY: server3.js >52:30
// take a lok at code flagged, figure out what it does
// loop through character objects array
// don't do optional routes with "?", be more explicit about routes
// ex: 54:xx

// POST Routes 57:35
// syntax: 
app.post("/api/new", function(req, res) {
  var newCharacter = req.body;
  //req.body!?!?
  console.log(characater);
  characaters.push(newCharacter);
  res.json(newCharacter);
});

// REQ.BODY
// including body-parser
// post methods normally send bunch of info, all really want is data from post
// body-parser takes care of that for us using: bodyParser.urlencoded and bodyParser.json
// app.use, then pass in methods
// app.use(bodyParser.urlencoded)
// app.use is a way to include middleware
// express.js has middleware system allows us to set up things to set up things to run every single req that comes in, then when it comes in modify two variables (req, res), to do different things

// when using bodyParser.json returns func that runs in middleware stack, and as req passes through, parses out data from req object and gives it to us

// takes all data, parses out body of post method, so we have req.body in function... get obj out instead of silly post data
// app.use() takes req and res, passes through different funcs, filter through different objects, finally once done served up to router

// whenever visiting url, it is a get request
// post is handled programatically, things like ajax and submitting a form are get requests



// POSTMAN, can use to post data instead of setting up form
// 1:14:42
// how to use: type in url
// req type POST
// body: raw
// change text > json
// paste in JSON

//note: when start server, running one process, starts up process, running, characters array always stored in memory as same characters array
// when push something to characters array, actually getting pushed there, exists in applicatio now, 
// however,  data is not persistent, as soon as server starts it's gone, make sure persisting data like database or file, etc



// ACTIVITY: server5.js >1:32:54
// slacked file, run postman requests from postman

// important take aways
// a lot of different ways to post data to server, needs to expect data type we're giving it
// body parser makes it super easy to accept differnt types of data (not so in other langs), looks at whats coming in, automatically parses it, then can access on req.body
// if specific type, ex:file, then use specific things with bodyParser or other packages to get that type of data (project2!?)
//body parser specify what its going to accept, in this case, json and url encoded forms

// so far looked at sending simple json/texts responses
// how to send files??
// express gives method called: sendFile!!
// notes: another pack, "path", allows to easily build out paths to different url's on server
// 1:35:34

// 1:36:39
res.sendFile(path.join(__dirname, "view.html"));
// __dirname means directory name, points to where we ran file from
// join creates path from those two objects, that point to view.html
// grabs file and runs/executes code to create webpage!



// ACTIVITY: server6.js 1:37:44 - 1:46:13
// json vs sendFile
// readFile: when we tell sendFile method here file is, goes gts file and responds in kind with html content from file to display i browser
// json: takes data we feed it, converts to json, sends it to browser
// use cases:
// readFile: display html to user when they type url
// json: when responding to api requests
// can load page in view/html, then go and fetch data we want from server, same as when first working with api, get data then display, now we are in charge of data and display
// have display, then fetch data from api
// want to keep them different, 
// better to decouple so that we can reuse html and reuse api
// ex: when store released mobile app, used decoupled api for mobile app, reused same api's
// ex: build api for store, api decoupled when released mobile app, release apis not double work, by decoupling able to use data routes as data routes, without having to rewrite logic



// DEMO FINAL APP 1:50:25
// can add data to app, then fetch it later

// if refresh, go to console settings, click on  log xml http request, refresh, what can do, every time ajax req happens, console will log: .. click, go straight to data, great for debugging



// NODEMON
// if hate restarting server: install global pack, nodemon
// how to: "npm install -g nodemon",
// "nodemon server"
// "rs" to restart server
// can now change files and automatically restart server
// others: supervisor, foreman



// ACTIVITY: final copy of star wars app, 155:05 - 
// figure out what is going on in add.html
// final piece of getting server running

      // sending ajax post request!!
      // from archive/add.html
      $.post("/api/characters", newCharacter)
        .then(function(data) {
          console.log("add.html", data);
          alert("Adding character...");
        });

//axios for get/post request
//jquery used for ajax calls

// jquery giant library, seen as a solution to a problem that no longer exists
// document query selector instead of $



// HEROKU
// github pages onyl shows static code
// heroku built on top of aws, they take care of partitioning/provisioning server etc, just push code to github, heroku will read it
// 2:24:xx

// how to:
// heroku login
// cd to app
// run: git init (creates empty git repo)
// git add
// git commit -m ""
// heroku git: remote -a <name>
// gives url
// git remote add heroku <url>
// git push heroku master


// heroku gives free hosting, limited resources, gotchas: taking forever to load, can only have 5 apps, cool things: can start on free tier with min resources, scale up as you ned to do it, commit resources currently able to comitt

// 2:29:08
// git push heroku master
// copies those files up to heroku so heroku can read them and run them

//heroku log