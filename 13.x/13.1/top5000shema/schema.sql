DROP DATABASE IF EXISTS `top_songsDB`;

CREATE DATABASE `top_songsDB`;

USE `top_songsDB`;

CREATE TABLE top5000 (
    `position` INTEGER NOT NULL,
    `artist` VARCHAR(100) NULL,
    `song` VARCHAR(100) NULL,
    `year` INTEGER NULL,
    `raw_total` DECIMAL(10, 4) NULL,
    `raw_usa` DECIMAL(10, 4) NULL, 
    `raw_uk` DECIMAL(10, 4) NULL,
    `raw_eur` DECIMAL(10, 4) NULL,
    `raw_row` DECIMAL(10, 4) NULL,
    PRIMARY KEY (position)
);

SELECT * FROM top5000;

CREATE TABLE top3000 (
    `position` INTEGER NOT NULL,
    `artist` VARCHAR(100) NULL,
    `album` VARCHAR(100) NULL,
    `year` INTEGER NULL,
    `raw_total` DECIMAL(10, 4) NULL,
    `raw_usa` DECIMAL(10, 4) NULL, 
    `raw_uk` DECIMAL(10, 4) NULL,
    `raw_eur` DECIMAL(10, 4) NULL,
    `raw_row` DECIMAL(10, 4) NULL,
    PRIMARY KEY (position)
);

SELECT * FROM top3000;