// request response life cycle
// how servers work

// node + express servers and routing!!
// importnat for how to build app does anything of value
// js backend, node runtime, express framework

// server
// handles reqeusts
// how to build software server that respond to request
// storing data, request/response life-cycle
// authentication - secure env on server, our code, peeps can't see it, do stuff to sensitive on client side


// client - something that allows us to interact with server
// ex: web server, sequel pro/mysql workbench

// communication 
// request/response
// client sends request, server sends response, use http

// can go an spin up 24:52
// telling it "we need this much space to run our server, program that we will rent"

// localhost - local server on machine, ex:firebase serve, will learn to make it locally


// 24:52...31:xx CHECK!!
// slide:27 forward

// post request way for user to send additional data, file uploads, fro client to server, handle on server
// server side logic - things like html page in etemplate, make sre it exists and send it back, wolfram alpha to and calculate using your hardware and send it back
// url parse - "what is inside this URL and what we do?"

// touch server.js
const http = require("http");

//comes with node core allows use to set up 

//define port:
const PORT = 8080;
// PORT is capitalized, more have an actual constant, discreet value dont want to change, want users to know that, caps to signify actual constant

// anything over 4000 safe to use, wont clash with anything on computer, common: 8080 8000 7070 7000, depends on wat lang, ruby 5000 php 8000, up to you as long as it doesn't clash, sequel dropbox loves to take 8080

// cannot use same as long as it is still running, 9999 is total number of ports, 4 digit

//create handler to take care of server:
let server = http.createServer( (req, res) => {
    res.end("It works: ", req.url);
    if (req.url.includes("path")) {
        res.end("You found the path");
    }
    res.end("It works: ", req.url);
    //response object, "end response with this data"

})

// pretty much have server running with above code...

server.listen(PORT, () => console.log("Sever running ", PORT));

// everyttie hit server:
// take req, use res to send something back


// URL basically commands that come into machine
// all we ahve to work with is URL, can do whatever we want to do same as js code
// ex: want to check if req.url contains

// rpouting is conditional logic, if url has this data do this

// not some process looking for hcanges, every req that ocme sin, runs through every bit of code, everytime change url, comes in as req, then request something from our side
// our logic only thing that dictates what happens
// everything coming through same handler

//working very low level, on the metal node gives us to work on, as low level as it gets, express will take away little anoyances


// router giant switch, when matches this do this
// request "/"

// 3 things send back
// status code, content type, response 1:16:xx

// res.writeHead(200, {"Content-Type": "text/html" });
// header meta data comes along with req that tells us things about, tell browser how to respond for specific req
// ex: working with api, send accepts header, needed access control, 

// html file stored in text file, read that file with npm fs


// process.cwd same as  __dirname (variable that wil always be in glocal scope)

// __dirname - magic variable 

//status code 200 is "ok"

// 404
// 200
// 500 internal server error
// 403 forbidden auth error
// 300 redirects


// postman
// send arbitrary request to given url
// send post requests
// send post req to see what results we get
// DOWNLOAD!!
// send req to server without setting up forms

// post req ex 2:39
// everything done so far is GET REQ
// dif: get requesting resource from server, most generic version of req
// post req allows us to sen data
// get req has max length, ex: can't fill url bar to 1m characters
// what it does: similar to http req, contains post body, all data contained in req, allows send files
// how to handle those at fundamental level, working at the metal, to see express heavy lifting

// reequestDAta = "" will add to it as things come to use
// req.on("data") every time data recewivd added to str as peices of data flow through to us; listens to data coming in
// req.on("end") - you did whatever method

// HOMEWORK
// be able to do: seeting up survey, enter info, create survey, match people based on prev responses, post form to server, do stuff, save to db, compare, api friends list link, show data from friends list, 