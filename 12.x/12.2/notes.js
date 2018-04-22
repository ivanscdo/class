// sql structured query lang
// standard
// differnt tyupes tsql, post_sql, different flavors
// mysql open source
// data base, where we store all info
// rows and clumns, like spreadsheet, tables inside database
// own little spreadsheet
// in general just talking baout clumns and rows
//very popular, a lot of peeps know it, and very structured, can't veer, string into boolean
//very fast/performant
//makes sense to store data
//brand new syntax!
//CRUD, will go hrough basic crud, and schemas, go over joins later

//to start, run:
//mysql.server start, if server not responding, do restart

//localhost in host
// username root

//have different environments, dev, live, etc
//schema synonmous to database

//to add
//add dtabase from dropdown, or
//create schema <name of database>, then Run Previous
//create multiple databases within server, and multiple tables within databases


// CREATE SCHEMA <name of database>

//create table
// USE <name of database>
// CREATE TABLE people (
// 	`name` VARCHAR(30) NOT NULL,
// 	`has_pet` BOOLEAN NOT NULL, 
// 	`pet_name` VARCHAR(30), 
// 	`pet_age` INTEGER(10)
// );
// CREATE TABLE IF NOT EXISTS... will create if it doesn't exist

// any reserved word is capitalized, issuing command to sql, lower case, info
//any statement ends in ;

// create table run once, 
// DROP DATABASE IF EXISTS



// -- Drops the favorite_db if it exists currently --
// DROP DATABASE IF EXISTS favorite_db;
// -- deletes database and data --

// -- Creates the "favorite_db" database --
// CREATE DATABASE favorite_db;

// -- Make it so all of the following code will affect favorite_db --

// -- Creates the table "favorite_foods" within favorite_db --
// CREATE TABLE favorite_foods ( 
//   -- Make a string column called "food" which cannot contain null --
//   	`food` VARCHAR(50) NOT NULL,
//   -- Make an numeric column called "score" --
//   `score` INTEGER(10), 
// );

// CREATE TABLE favorite_songs (
//   -- Make a string column called "song" which cannot contain null --
//   `song` VARCHAR(100) NOT NULL, 
//   -- Make a string column called "artist" --
//   `artist` VARCHAR(50),
//   -- Make an integer column called "score" --
//   `score` INTEGER(10),
// );

// CREATE TABLE favorite_movies (
//   -- Create a numeric column called "id" which automatically increments and cannot be null --
//   `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL
//   -- Create a string column called "movie" which cannot be null --
//   `movie` VARCHAR(100) NOT NULL, 
//   -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
//   `five_times` BOOLEAN DEFAULT 0,
//   -- Make an integer column called "score" --
//   `score` INTEGER(10),
//   -- Set the primary key of the table to id --
//   PRIMARY KEY(id)
// );



// ids to target specific records
// signed cs unsigned,
// unsigned cannot be negative
// signed can be negative
// autoincrement every time we insert, increment by one,ensures  everything has unique id to target
// instead of assign arbitrary id, no matter how many req we send, it will have a unique id
//primary key can only contain unique values






// INSERT INTO people(`name`, `has_pet`, `pet_name`, `pet_age`)
// VALUES ("Andrew", 1, "Sophie", 1), ("Ian", 0, NULL, NULL);

//backticks escapes, quotes defines string


// UPDATE people SET pet_name = "Zoe" WHERE name = "Andrew"

//select allows to pull from tables, * everything from table



// UPDATE people
// SET
// 	`has_pet` = 1, 
// 	`pet_name` = "Monster",
// 	`pet_age` = 1
// WHERE `has_pet` = 0,


// SELECT * FROM people
// WHERE `has_pet` = 1 AND `pet_name` = "Monster";

// CREATE TABLE programming_languages (
// 	`id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, 
// 	`languages` VARCHAR(30), 
// 	`rating` INTEGER(10),
// 	PRIMARY KEY(id)
// 	);


// INSERT INTO programming_languages(
// 	`languages`, `rating`
// 	)
// VALUES
// ("html", 1),
// ("css", 2), 
// ("javascript", 3);


// UPDATE programming_languages
// SET
// 	`rating` = 5
// WHERE `id` = 3


// ALTER TABLE programming_languages ADD `mastered` BOOLEAN DEFAULT 0




//id's let us target specic records within ddatabase
//ex when you click on facebook, pull some kind of id 

// <2:16:xx>
// SELECT field_names, field_name FROM table_name WHERE field_name = CONDITIONAL AND field_name = CONDITIONAL

// INSERT INTO table_name(
//     field_Names, 
//     field_name
// )

// VALUES(
//     value_1, 
//     value_2
// )

// UPDATE table_name SET field_name - balue, field _name - wvvalue WHERE field_name = CONDITIONAL

// DELETE FROM table_name WHERE field_name = conditional 

//common errors, forgetting ; or including ,



// <2:19:xx>
// joins

// SELECT *
// FROM SVGPathSegCurvetoQuadraticSmoothAbsLEFT JOIN product_descriptions ON product_descriptions.product_id = procudts.id

// SELECT 
//     products.id as product_id, 
//     product_name, 
//     sku, 
//     product_descriptions.id as product_description_id, 
//     description
// FROM products
// LEFT JOIN product_descrioptions
//     ON products_descriptions.product_id = products.id
// WHERE product_desction IS NOT null

// aliases us as keyword

// specifying form top to bottom, left join from right to left, left will always appear, right join 

// FROM is left most table


//can save files with .sql extension!!!


//FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
//when create table with foreign key, weak reference to product id, when add key to table has to reference id within product table
// ON DELETE CASCADE if delete product id on product table, will delete product descriptions 
// FOREIGN KEY sets up key to ref one table to another

// SELECT *
// FROM products
// LEFT JOIN product_descriptions on product_descriptions.product_id = products.id;

// for every mathching record in product description, match that record with products record and return


// SELECT
//   products.id as product_id, 
//   product_name,
//   sku, 
//   product_descriptions.id as product_description_id,
//   desription
// FROM products
// LEFT JOIN product_descriptions on product_descriptions.product_id = products.id;

//can rename with keyword as
// will get back products named whatever we specified
// take ind columns and rename them  as part of SELECT query
// will rename on dataset results
// useful with multiple ids
// will come back in order specified

//products.id  means table.column - column named id in table named products

//can alias tables in from and join statements

//alias for columns product.id as product_id
//alias for tables products p
