* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  ORM framework

  	- Answer: What advantages does it offer?
	  migration-bases table management (update or revert that database's schema to some newer or older version) or object based table creation (ORM)
	  non-blocking/asynchronous, accepts callback functions

  	- Answer: How do I install it? How do I incorporate it into my app?
	  install: npm install sequelize
	  require/initialize

  	- Answer: What the heck is a Sequelize model? What role will it play?
	  A Model represents a table in the database. Instances of this class represent a database row.

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		  SELECT * FROM <table name> WHERE Independenceyear < (2018-50);

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
