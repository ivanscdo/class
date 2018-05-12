// review of sequelize
// CRUD methods
// create, find, update, destroy
// where clause, paramters on query, only start at specific records

// 11
// solution: 19:xx
// DataType.TEXT can be artibrarily long - really long text

// 13
// solution 48:xx
// findOne vs findAll
// finOne returns: (single) object
// findAll returns: array (of objects)

// table pic
// ~1:00:xx
// foreigh key on post so each post can reference author

// note: in general will not have to touch UI, only backend

// 14
// associations
// solution: 1:26:xx
// need to setup both assiciations, need to say both: author has nany posts & posts have single author
// x belongsto y, y has many x
// always set up both associations!!
// associate method in models/index.js, 
// use opposite/inverse/matching associations methods

// 15
// author joins
// solution: 1:59:xx
// can include where clause inside include