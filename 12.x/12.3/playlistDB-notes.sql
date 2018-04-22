DROP DATABASE IF EXISTS playlistReadDB;

CREATE DATABASE playlistReadDB;

USE playlistReadDB;

CREATE TABLE playlist (
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, 
    `title` VARCHAR(30), 
    `artist` VARCHAR(30), 
    `genre` VARCHAR(30),
    PRIMARY KEY(`id`)
);


INSERT INTO playlist (
    `title`, `artist`, `genre`
)
VALUES ("Daily Mail", "Radiohead", "art rock");

INSERT INTO playlist (
    `title`, `artist`, `genre`
)
VALUES ("Feel", "Kendrick Lamar", "rap");

INSERT INTO playlist (
    `title`, `artist`, `genre`
)
VALUES ("So America", "Portugal. The Man", "psych rock");

UPDATE playlist
SET 
    `genre` = "Time traveling electronic space rock"
WHERE `artist` = "Radiohead"

UPDATE playlist
SET 
    `title` = "So American"
WHERE `id` = "3"