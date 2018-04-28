-- * Create a seinfeld_db database with an actors table.

--    * The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).

--  * Add in four actors with different names, coolness_points, and attitudes.

--  * Create a Node Application with Express and MySQL with three Express routes.

--    * Create a `/cast` route that will display all the actors and their data ordered by their id's.

--    * Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.

--    * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.

-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS seinfeld_db;
-- Creates the "animals_db" database --
CREATE DATABASE seinfeld_db;

-- Makes it so all of the following code will affect animals_db --
USE seinfeld_db;

CREATE TABLE actors (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  coolness_points INT NULL,
  attitude INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO actors (`name`, coolness_points, attitude)
VALUES ("jerry", 7, 100),
("kramer", 10, 120),
("jorge", 5, 75),
("elaine", 8, 75);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
