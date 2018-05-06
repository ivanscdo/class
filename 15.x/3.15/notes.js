// // // CLASS
// sequelize crud operations
// important things: being able to pickup on new things!

//15.2 SEQUELIZE-CLI json 2:37:xx

// 35:xx solution 07-
// server: db.sequelize.... {force:true} drops and creates
// next: findall and create methods



// solution 57:xx
// what is inside model file cannot be used...
// pluralizes table name, bt will refe as what we call it
// findall({})  empty obj gets everything
// different routes for different models
// have directories mirrored


// solution ~1:29:xx
// not currently validating content
// sequelize give validation methods
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html#validations



// make sure string we input, between 1-140 characters, play with validations to see reaction if more than 140



// solution 1:57:xx
// need to add a catch for db operations!


// 2:01:xx
// "entity relationship model"
// relations
// entity relationship model, understand associations, traditionally next class most confusing!!
// many - many relatioship
// obj in multiple tables, ex:tags in posts, unlimited amount of relatioship between two
// one - many
// multiple obj in left table, several more in right table
// one table can have many children, but do not share any children, ex:one prodcut may have meta data, meta data will not share product, also users and address
// one - one
// one thing that has one thing, ex: one user and one profile, one user will only ever have one profile, one profile will only ever have one user
// at it's core, three main relationships, most importnat ^^^
// has many, belongs to, throughs, etc


// DEBUGGING
// ~2:18:xx
// follow the code
// inspect on front end, see where it is, find it in code, console.log
// cmd+R, then search
// unhandled rejection warning, means dont have a catch