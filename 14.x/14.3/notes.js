// app with handlebar, view dog,  tpe pet fireceneness, al pets, all non pets
// take array of data, sift through it, see if they are pets, create route for dog

// solution 23:24




// REST 31:51

// STANDARD FOR MAKING REQUESTS TO APP THAT AHVE TO ADHAERE TO SPECIFI RULES
// VERY MUC LIEQUID, NO REST POLICE, just a strnadard that a lot of peeps like to adhere to 

//idea: have for action, get post, put, pastch, delete, req mthod when talking to server, tell it what need to do

// uniform interface
//if get req for reosoruce, have pwe to delte, better get back everytihgn in req to delte, need unique id to send with delte req to actually delete (resource based part)

// stateless!!!!!
//  10 yrs ago, might send req to api, init sesh, remembering stuff, when tel to elete, knows what record to delte, modarn day: we hvae multiple servers running same app, load-balancer, which server is bussy, sends req to server that is least busy, if statefull  api, always routed to same server, doesn't work today, stateless arch, everything server needs includes in req, includes in delte req everything server needs to know, might need multiple req to get details, then delte/patch etc to perform action

// cacheble
// req can be cashed, when send req send data, 
// ...

// layered system
// ...

// code on demand
// can send js code to be exec on client

// not estful servesr if...
//  some may call even if it doesnt apply, name/moniker instead of true standard

// app lookng at 4 req methods 38:40
// get returk task, post add, put updating (technically using as update but have somehting called patch legit by definition), put/patch interchangable, delete - delete, lables on post requests, essentially post request, send these and allows to label, can send all 4 methods to do different things

// same method different call, when req coming in, matches route api, but get/post/put using correct handler

// all going to same place, based on thtp method, do different things

// send task saver, set up to makek sure running, set up scema




// solution to tasts: 59:40
// redirect - update profile, send to view page of profile, refreshing in this case
// next() only when using custom middleware 1:12:50
// res.render inside bc asynch action, need to wait until data is back before sending it in

// build out wish list




// solution to wishes 1:39:xx
// bad practice to push to github!!! might contain keys, big issue!!
// mysql commands: 1:48:32



//day planner PUT DELETE 1:49:54
app.put("/todos/:id", function(req, res) {
    connection.quiery ("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params,id], function)
})
// listening to detel and put reqs

app.delete("todos", function (req, res) {
    connection.query("DELETE FROM plans WHERE id = ?",)
})

// ugly code = time to grasp, look at code and see what i's doing, ease of reading code for someone who has never seen code, 
// put can have body, get cannot??
// hit specific resource /todos


// click handlers
.on(click)

// $.get/post do not exist for put/delete, need sto use AJAX
$.ajax("/todos/" + id, {
    type: "DELETE"
}).then(
    function() {
        conssole.log("deleted id ", id);
        location.reload();
    }
)

$.ajax("/todos/" + id, {
    type: "POST",
    data: updatedPlan
}).then(
    function() {
        conssole.log("deleted id ", id);
        location.reload();
    }
)

$.ajax("/todos/" + id, {
    type: "PUT",
    data: updatedPlan
}).then(
    function() {
        conssole.log("deleted id ", id);
        location.reload();
    }
)
// location.reload() refreshes the page


// return from break 2:19:16
//sending ajax requests to interact with server (full stack dev)


// solution: ~<2:43:xx
// need to send something back!!

// runthrou: 2:47:xx
// need package.json, no wmatter what in node, needs to be ther even if empty, readon: when go to intall something later, expected to be there, gives info, heroku requires or wont work, bare min: body-prarser, expxress, express-handlebards, mysql,  fs-extra
// need views/layouts folder, can hadd subfolders, reference with / as with filepath, 
// need main/default layout, main.handlebars with {{{body}}}
// server/js: require express, bodyParse, app and port (PORT), lock josn important in prod apps, bodyParse
// express-handlebars, just include, boilerplate, dsetting deefault layout and setting view engine
// mysql, adding, creating conenction, add .conenct func, boiler plate, copy/paste good to go note:if routes in diff file, need 
app.use(req, res, next => {
    req.db = connection;
    next();
})
// everytime user-defined middleware, NEED next();
//new project: copy shell, tailor from there
// express.static!!
// use often, prety much always, for things like images, css, static html
app.use(express.static('public'));
// server.js setting up basic stuff, init stuff, any middle (can also breakup into other files), basic bootstraipping of app, getting ueverything up and running