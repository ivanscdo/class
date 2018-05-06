// will not focus on boiler plate code

// solution 27:xx
// date format on mysql, machine data time: yyyy-mm-dd hh:mm:ss



// sequelize
// ~30:xx
// if one thing off, nothing will work
// will throw boiler plate together
// point of this week: googling and reading docs



// solution to questions ~47:xx
// code representation of data, can automatically hangle "boring stuff" like creating tables

// type:Sequlize.STRING

// will automatically pluralize defineing table, but talbe collection of data, but this is a model for one piece of data
// no id, automatically creates id column for us, however can override if need special thing
// var tableNmae = sequalie.define('addess', {
//     country: {
//         type: sequelize.STRING
//     }, 
//     PHOneCode: {
//         type: sequalie.INTERGER
//     }, 
//     Capital: {
//         type: sequelize.STRING
//     },
// })

// const Op = Sequelize.op;

// tableName.sync({ force: true }).then(function() {

//     tableName.findAll({
//         where: {
//             independenceyear: {[Op.gt]: new Date().getFullYear() - 50}
//             // $gt operator, using symbols instead of string, same as Op.gt (aliased version)
//         })};

//         tableName.findAll({
//             offet: 2, //start from 3rd record, runs ordering before offset, get back sorted version, offset by 2 then limit, how we handle pagination
//             limit: 2,
//             order: [
//                 [sequelize.col('IndependenceYear'), 'DESC'],
//             ]
//         })


//     return tableNmae.create({
//         coutnry: 'afganistan', 
//         PhoneCode: 93, 
//         capital: 'kabl', 
//         independenceyear: 1919``
//     });
// });

// limit
// ~56:xx

// sync
//  ~59:XX
// migration stuff, don't need, can always resync as long as dont' ahve data to preserve




// REVIEW CHIRPY SEQUELIZE
// 1:02:40
// api-routes, require model/chirp.js
// model/chirp.js: 
// model defintion, this is only the representation of data, not running any queries, just modeling out what data will look like
// require Sequelize: library version, how we run schema
// require connection.js
// connection.js:
// creating connection to database, sequelize will connect to db, then export conn to use in other files (same as before, but sequelize handles it for us rather than manually connect),
// only step to do before in schema.sql is CREATE SCHEMA <db name>;
// var <connection name> = new Sequelize("<db_name>", "<username>", "<pwd>", "<{options obj}>");
var sequelize = new Sequelize("<db name>", "<username>", "<pwd>", { 
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})
// pool:{}
// "what kind of connection pool do we want to keep open," whenever we run con to mysql tell it to conenct to db, some latency between tell it to conenct and actual connect
// pool allows us to keep some conn open, to use conn on subsequent requests
// options obj which allows to finelyl tune connect
// connection.js is boiler plate

// chirp.js
// require connection.js, name schema, ex: var schema = require("connection.js")
// create model of data: var Chirp = schema.define(...), then pass object of columns, set type of values ex: Sequelize.STRING, timestamp true, etc
// timestamp
// automatically keeps track of created at and updated at column for table, created at-going to say "when somebody created this", updated at-tracks every time it isupdated along with last person
// sync withdb then export

// api-routes.js
// Chirp.findAll()
// pass in empty obj, no settings, get promise back, send results in json
// can limit it with where clause
// Chirp.create()
// pass in obj specifying what we want the keys to be, pass in req.body data, then get it back and res.end with .catch in case something goes wrong
// created model of what data should look like in chirp.js, then set up model, creates table, in api-routes.js able to use Chirp object like any other code, "chirp.whatever", gives unified api around all data types
// different orms have different syntax etc, but generally will give CRUD methods along with assistant/convenience methods, like findAll etc (Model usage in doc site), gives helper methods, write less code to get same result
// note: in Sequelize.STRING (uppercase), STRING is a constant defined on Sequelize object, can limit with ex:Sequelize.STRING(50)


//solution 1:39:xx


// sequelize library
// solution: 2:24:xx


// sequelize cli
// 2:32:xx
// npm install -g sequelize-cli

// focus: query, module usage
