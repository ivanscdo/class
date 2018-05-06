// quotes activity
// solution 20:20

// 21:22
// app.use(express.static("public"));
// "link assests that are contained in the public folder"

// res.render("index", { quotes: data });
//   {{#each quotes}} this is the key name we used earlier

// orm vs queryBuilder
// object relational mapper, we ahve three different wasy to interact with db, sending queries straight to server (connection.query)

//query Builder, takes paramers in and puts together sql
// no longer have to specify _ for each table
// drawback: select * will pull all info in tables, will not be optimized to pull certain columns

// ~40:xx
// orm maps an object, orm obj, to speciic instance within code, when create pointing it at specific resoruce, table we want to use, 

// why ORM usefuls? 47:xx


// ACTIVITY: cli, no server
// solution: ~1:15:xx
// ?? for table and column names will add backticks since it will escape the backslash, extra layer of making sure no protected names


// 1:17:50 CALLBACK


// MVC 
// 1:41:xx
// rails in ruby eco vey much MVC, very loose, no strict standard
// views - showing data, what user sees, waht clients get sent back
// models - database, representation of db, any code that interacs with db in model file, model should be code represetantion of what db looks like
// controllers  - responsible for controlling logic of application, consolidating logic so it does things

// a lot of frameworks commit to mvc, react... ruby on rails, laravel/php,
// mvc usefull for other languages


// 1:54:xx
// if else helper in handlebars
// try to keep a little logic as possible in templates, loop or checking if variable exists

// unless - means not if
// dont' have to use else if ust tyring to show something, if sleep is not defined, then put this something else text
// opposite of if

//multiple conditions, nest them
// {{#if sleep}}
//     {{#if notEarly}}
//     SLEEP TIME!
//     {{/if}}


// catsapp
// sollution: 2:21:xx


// 2:26:xx


// persistent data, set up mysql on heroku!!!
// if working locally, but not working on hosted site, not working!