// next project: not as much time in class, but more time overall

// 1.first 30 seconds most important - demo, strong statement, etc
// 2.practice speech, come in with outline, focus on people that are receptive to idea - those that are listening, responding, etc
// 3.take charge, be confident, take the lead - will mostly be entering into jr roles, but promotion based on whoever takes charge and leads, matter of ownership
// 4.frontload - plan for 60% of work in 50% of time - plan to mostly be done in first half with prototype to be able to take care of issues that will arise
// 5.you WILL run into issues, make estimate for something to take then double it, get ahead of the problem, frontload!!

// proj3
// 1. reel it in, know your limit, know your abilities
// 2.project mgmt - don't assume everyone will get their part done, ask:"where are we on this??" (don't be afraid to take charge), in real-world: will perform maintenance while working on features, and switch to helping co-workers
// 3.scaffold first - frontend & routes!! mock data structures, etc
// 4.don't get discouraged - ask for help, you won't be judged, but will be expected to help next time
// be sure to be constantly communicating!

// next steps
// 1. gif your github readme, having something visual, url point them to, video showing how app works, show off animation/flows,look impressive, visual representation much easier
// 2. guest/dummy login, recruiters won't want to use personal email
// 3. write tutotial, medium.com(free) and scotch.io(validation)
// 4. showcase project on YOUR terms, have some control over what is showing when showing URL; don't not leave half finished features, polished and working is better than ambitious and not working
// 5. list niche skills on linkedin (node, express, sql, etc, but not as granular as passport js; focus on major tech bubbles), if listed be prepared to answer questions, whatever you feel strong with, know what it is, answer questions 
// 6. list project on linkedin, okay to list project and class time, be honest when asked about experience
// 7. write each other recommendations - endorse others for work done on linkedin

// road ahead
// mongo, algorythms...

// double down
// office hours, schedule time
// will mostly focus on mongo db and react
// networking is incredibly important
// coming out: go for full stack or front end (html css handlebars), common to transfer from front end to full stack/backend, 

// how to study?
// do what works for you, videos or written tutorials
// dip toes into algorhythm stuff, problem solving is mostly what employers are looking for
// choose what you want to focus on and BUILD something with it
// experience and building stuff, take laten to tacit knowledge to use and recall immediately

// stay up on technologies (r\subs and hacker news)
// most successful/best developers spend time outside of work learning knew technologies, spending time out of work, ex: emp:change to react, only person to learn react, step up and take lead, huge boon to standing in group
// passion, taking ownership
// % of time maintenance, building new features, etc - depends on job/company and position, 70% maintenance, 30% tasks; entry level role will do little bit of both, 
// agile/scrum - agile dev, work on sprints, 2 week interval, story>feature, gamefication
// maintenance - bug fixes or clear out irrelevant logs, working on server, 
// how to keep up to date:prog subs, hackernews, going through rabbithole

// noSQL
// "not only SQL"
// largely main way to storing data, 
// document-oriented model as opposed to table-based relationa model
// mongodv stroes data in blobs of json, BSON format, tons of drivers and packages for connecting to node, c++, java, 
// mongoDB is not only noSQL db


// 47:xx
// heterogenous data
// if users don't have data, leave data off, not "Not null etc"
// multiple authors stored as array
// mongodb engrained with express/node because it is hadled in code
// collection is like table in SQL, but it is not a table, collection of documents


// noSQL: db > collection > document > field
// SQL: db > table > row > column

// 1. advantages
// flexibility - ex db migration, adding column is_visible, set up maintenance window, migrate; with mongodb added is_visible to code and push, easy to make changes to schema (because no set in stone schema)
// 2. disadvantages - if very structured data, go with SQL if it makes sense, feature by feature, sometimes need constraint, need bug to be thrown, need ACID complaince, mongo does not have transactions, "about to run 6 queries, if something goes wrong, roll back", if you have data like inv mgmt system, 

// if you find a point, find counter-point, anybody can write an article, everybody has an opinion and experiences (positive or negaive)

// two parts to mondodb
// start: mongod
// leave running as long as interactng with db, ignore msgs, basically saying set up settings for production server
// `mongo`
// mongo shell, connect to db
// mongo js, sql ddb exits when created, mongo not created until data entered
// `show dbs`
// use <name of db>
// `db.places.insert({"continent": "Africa", "country":"x"})`
// `db.places.find ()`  or `db.places.find().pretty()` for json format
// `db.places.insert({continent: "Australia", country:"Australia", majorcities: ["Perth", "Sydney", "Melbourne"]})`
// `db.places.find({continent: "Australia"})`

// pass in complete ObjectID("xxx")

// db.students.find({hobbies: {$in: ["linguistics", "Hiking"]}})
// db.stuends.find({_id:ObjectId("5b109c4c151e3229e405a62a") })

// update & delete
// update
//  db.places.update(
    {
        "country":"Morocco"
    },
    {
        $set: {
            "continent": "Antartica"
        }
    })
// if updating to something that does not exist, it will create, same with

//  db.places.update(
    {
        "country":"Morocco"
    },
    {
        $update: {
            "majorcities": "Agadir"
        }
    })
// if it already exists, it will push it anyway

// db.places.find(
    {"capital": {$exists: true}}
)

// db.places.remove(
    {country: "Morocco"}
)

// db.places.drop() drops collection
// db.dropDatabase() drops db

// {multi: true} allow to update more than one record

// upsert : if there update, otherwise create new record

// can use dot notation

mongojs
robomongodb