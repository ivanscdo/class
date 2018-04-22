DROP DATABASE IF EXISTS playlistReadDB;

CREATE DATABASE playlistReadDB;

USE playlistReadDB;

-- CREATE TABLE playlist (
--   id INT NOT NULL AUTO_INCREMENT,
--   flavor VARCHAR(45) NULL,
--   price DECIMAL(10,2) NULL,
--   quantity INT NULL,
--   PRIMARY KEY (id)
-- );

-- A column called "title"
-- A column called "artist"
-- A column called "genre"

CREATE TABLE playlist (
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, 
    `title` VARCHAR(30), 
    `artist` VARCHAR(30), 
    `genre` VARCHAR(30),
    PRIMARY KEY(`id`)
);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);

INSERT INTO playlist (
    `title`, `artist`, `genre`
)
VALUES ("Daily Mail", "Radiohead", "psych rock");

-- // UPDATE programming_languages
-- // SET
-- // 	`rating` = 5
-- // WHERE `id` = 3

UPDATE playlist
SET 
    `genre` = "Time traveling electronic space rock"
WHERE `artist` = "Radiohead"