// 2:17
// domain hosting
// name cheap, hover - independently owned and run from hosting
// good practice, doain and hosting in separate accounts
// hosting
// digital ocean, standard droplet
// more to get running than heroku
// know how to set up lnux boxes...
// aws 
// to scale up, 
// google cloud
// integer (4:28)
// flat html - github pages
// bluehost account



// 13-warmup
// solution 16:xx
// morgan - app.useloger dev - logs stuff for terminal

// objectid hhow mongo stroes id, need to include .ObjectId(req.params.id), it needs to look for the object id



//mongoose
// 21:19

// packages toether validation and moduling for mongodb objects for us
// defines model "here's what our data looks like"
// same thing as sequelize, make model of data, when insert conforms to data we set up
// benefits of mongodb is flexibility? still using mongo db, if need one table to not have a model, don't need to define model for every single table we are using, but beyond gives us some data integreting, mongodb throws whatever at the wall and it sticks, 

// 27:00
// benefits for mongoose
// validation
// convenience of active record model
// 29:00
// plain mongo over mongoose
// if we have data all over the place, 100's of keys, not workthwhile to model with mongoose
// mongo db with models over mysql
// ease from mongodb, things with querying, power of mongodb with safeguards
// continue to use mysql
// relational data

// 34:00
// review exampleModel.js
// 1.create schema, pass in object
// 2.create model object
// var ex = mongoose.model("<ref>", <schema>)
// module.exports = ex

// create schema
// within schema all validation logic
// naming a bunch of fields and type
// trim: trims all white space
// required: boolean-generic message, "string" message that we'll get out
// unique: has to be unique
// match: tuple with regular expression and string
// 37:x
// regular expression
// . - match anything
// + - go until next thing is matched
// @ - match @ sign

// 40:xx
// custom validation

// 41:36
// server.js
// import Example (model)
// Example.create, pass in data object, use promises, .then.catch
// by default, if try to pass additional data without defined, mongoose will strip it out, but can add strict:false, giving back flexcibility for mongo, however, if know it's going to be there, go ahead and define in model



// 15-User-Schema
// 47:30
// solution 1:06:00
// don't rely on regexp for email validation, pull down library
// can create custom plugins!!!



// robo db
// 1:11:xx
// create>test>save(ok w/ defaults)
// right click collection>update> gives template to write out fields



// 1:13:04
// custom methods
// custom logic so we dont have to do the same logic over and over again
// nice things mongoose: takes out repetive nature of validation
// methods do specific thigns to models without having to do them every single time
// <schema>.methods.<name of custom method> = function(){ <do stuff here> };



// 1:29:50
// solution: 17-Custom-Method-Exercise



// 1:47:00
// return from break
// associations in mongoose



// 2:11:30
// solution 19-Populate-Exercise-Solved
// important to be able to talk intelligently about mongodb if going after node job, being able to use correct nomenclature, calling things collections and not tables



// 2:48:01
// solution 20-Scraping-With-Mongoose-Unsolved
// 2:49:00
// axios
// jquery/request - need one on node one on client side
// axios - can be used with same syntax on client and server