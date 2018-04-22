// 1:07:xx
// connect mysql db from node.js
// mysql pack let us connect to db in node.js, w/o do a lot to get working

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "", 
    database: "ice_creamDB"
});

// connection.connect(function(err){
//     if (err) throw err;
//     console.log("connected as id"  + connection.threadId)
//     connection.end();
// });

//1:27:xx
// connection.connect(function(err){
//     if (err) throw err;

//     connection.query("SELECT * FROM products", function(err, res) {
//         if (err)
//         return console.log(err);

//         console.log(res);

//     connection.end();
// });

connection.connect(function(err){
    if (err) throw err;
    getProducts();
});

function getProducts(){
    connection.query("SELECT ", function (err, res) {
        if (err)
            return console.log(err);

            console.log(res);

            connection.end();

        });
}


function queryAllSongs() {
    connection.query("select * FROM songs", function(err, res) {
        for( var i = 0; i < res.length; i++ ) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("---------");
    })
}

//sql injection attack, need ?, they insert data into fields to wipe database, can get admin pwd, when passed in as arguments, sql on bakend sanitises, 

function queryDanceSongs() {
    var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        connection.end();
        //end connection when done making queries!!!

    });
    console.log(query.sql);
}


//INSERT EX
function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO products Set ?",
        {
            flavor: "Rocky Road", 
            price: 3.0, 
            quantity: 50
        }, 
        function (err,res) {
            console.log(res.affectedRows + " product inserted!\n");
        }
        //converts object into key-value pairs
        //could use array of objects for multiple stuff
        //can use progress.argv for user input on key-value stuff
    );
}

//UPDATE EX
function updateProdcut() {
    console.log("updating all rocky road quan...\n");
    var query = conneciton.query(
        "UPDATE prodcuts set ? WHERE ?",
        //question makrs are placeholders, our values replace them
        [
            {
                quantity: 100
            }, 
            {
                flavor: "rocky road"
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + "produts updated!\n");
        }
    )
}

//delete ex
//2:47:xx
function deleteProduct() {
    CONSOLE.LOG();
    let query = connection.query(
        "DELETE FROM products WHERE ?", 
        {
            flavor: "strawberry"
        }, 

    )
}

//HOMEWORK

// another command line int 
// 3 parts bamazon
// customer view
// manager view
// supervisor view

// enter command see list of products, 

// include: video of using product, or gif, or screenshots!

//details of you need to do, upload github repo