-- NOTES use different languages for a reason, for loop? pull first from sql then do stuff, CSS not used for logic, JS not used for styling, SQL filtering data --

--Create - INSERT, Read - SELECT, Update - UPDATE,  Delete - DELETE, when talking about CRUD talking about data in tables, not database--

--init setup actual database, not insert data--

--one to one relationship ex: social media site and profile, user will only ever have one proflie

--one to many/many to one ex: order may have many order items/order items all belong to mutiple orders

--car models & parts ex: can all belong to each other

--instance? aws, creating instance of server

DROP SCHEMA IF EXISTS products;

CREATE SCHEMA `products`;
USE products;

CREATE TABLE `products ` (
    `id` INTEGER UNSIGED..
    `sku` VARCHAT(14) NOT NULL,
    `price` FLOAT(6, 2) NOT NULL, 
    `date_added` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(id)
);

--FLOAT 6 is total, 2 of those 6 after decimal

--PRIMARY KEY sets reference 

CREATE TABLE `customer` (
    `id` INTERGER UNSIGNED AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(50), 
    PRIMARY KEY(id)
);

CREATE TABLE `order` (
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, 
    `customer_id` INTEGER UNSIGNED NOT NULL, 
    `address_id` INTEGER UNSIGNED NOT NULL, 
    `date_placed`DATETIME DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(id), 
    FOREIGN KEY(customer_id) REFERENCES customer(id)
);

--referencing colum, both have to be unsgned

CREATE TABLE `order_item` (
    `order_id` INTEGER UNSIGNED NOT NULL, 
    `product_id` INTEGER UNSGNED NOT NULL,
    `quantity` INTEGER DEFAULT 1, 
    `notes` VARCHAR(255)
);

CREATE TABLE `address` (
    `id` INTEGER UNSIGNED AUTO_INCREMENT NOT NULL, 
    `type` ENUM('billing', 'shipping') NOT NULL, 
    --declaring what values it is allowed to be, insert aside from biling etc, will not accept, ensures integrity--
    `city` VARCHAR(255), 
    `state` VARCHAR(255),
    `country_code` CHAR(2),
    --enforces the length, can exclusivly be 2, instead of up to with VARCHAR--
    `street` VARCHAR(255),
    `customer_id` INTEGER UNSIGNED NOT NULL, 
    PRIMARY KEY(id), 
    FOREIGN KEY(customer_id) REFERENCE customer(id)
);

--INIT SETS up structure, seeds sets up dummy data
--<34:55>
INSERT INTO `products` (`sku`, `price`)

...

INSERT INTO `address`
(
    `type`, 
    `city`, 
    `state`, 
    --when run select, "put this value in this column", but can also hardcode values--
    `country_code`, 
    `street`, 
    `customer_id`
)

--variables
SET @order_id = LAST_INSERT_ID();

--running through code 39:xx

--whenever run select statement, not changing info on database, you get a report

SELECT
    p.sku,
    oi.quantity
FROM order_item oi
    LEFT JOIN products p ON oi.product_id = p.id;

    --"go get all order items, join prodcuts"--


--GROUPING 48:xx

GROUP BY p.sku
ORDER BY sales_total DESC;

--AGGGREgate column, all items select added into single value

SUM(oiquantity) AS sales_total

--"get al records, group them by sku, then looks at oi.quantity, then run sum func"

COUNT(oi.order_id) AS times_ordered
--counts total number of time aggreagete appears, can see sales total and number of times ordered, useful for record counts, see if username exists, count on username

--53:xx
...AS avg_per_order
--similar to func in excel

--single join??

--LIKE allows % sign as wildcards, %black = _black

SELECT
    customer.name,

--join in () specify another query, annonmous query, give that data label, reference things as result set as another tabel

--can always combine queries to make it one query



--GROUP BY, COUNT, SUM
--orm's and query builders



