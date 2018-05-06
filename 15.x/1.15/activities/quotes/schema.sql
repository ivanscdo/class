DROP IF EXISTS 151_act_quotesDB;

CREATE DATABASE 151_act_quotesDB;
USE 151_act_quotesDB;

-- Create the table plans.
CREATE TABLE quotes
(
id int NOT NULL AUTO_INCREMENT,
quote varchar(255) NOT NULL,
author varchar(255) NOT NULL, 
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO quotes (quote, author)
 VALUES ('Success is a lousy teacher.', 'Bill Gates');


