// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var schema = require("../config/connection");

// Create a "Book" model with the following configuration
var Book = schema.define("book", {
// 1. A title property of type STRING    
    title: Sequelize.STRING,
// 2. An author property of type STRING
    author: Sequelize.STRING,
// 3. A genre property of type STRING
    genre: Sequelize.STRING,
// 4. A pages property of type INTEGER
    pages: Sequelize.STRING,
},{
// 5. Set timestamps to false on this model
    timestamps: false    
});

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;