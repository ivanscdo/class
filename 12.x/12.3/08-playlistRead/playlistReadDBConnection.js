var mysql = require("mysql");
var command = process.argv.slice(2, 3).join("");
var tableID = process.argv.slice(3, 4).join("");
var arg = process.argv.slice(4).join("");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistReadDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
//   connection.end();
});


 function createPlaylist() {
     console.log("INSERT INTO...");
    var query = connection.query(
        "INSERT INTO playlist SET ?", 
        {
            title: "...And Justice For All",
            artist: "Metallica",
            genre: "Metal"
        }, 
        function(err, res) {
            console.log(res.affectRows + " product inserted!\n");
            // updateProduct();
        }
    );
    console.log(query.sql);
    connection.end();  
 }

//  createPlaylist();

function updatePlaylist(tableID, arg) {
    console.log("UPDATE");
    var query = connection.query(
        "UPDATE playlist SET ? WHERE ?", 
        [
            {
                genre: arg
            }, 
            {
                id: tableID
            }
        ],
        function(err, res) {
            console.log(res.affectedRows + " playlist updated!\n");
        }
    )
    console.log(query.sql);    
    connection.end();  
}
// updateProduct();

function deletePlaylist() {
    console.log("DELETE FROM");
    var query = connection.query(
        "DELETE FROM playlist WHERE ?", 
        {
            id: 5
        }, 
        function(err, res) {
            console.log(res.affectedRows + "playlist deleted! \n");
        }
    );
    console.log(query.sql);
    connection.end();
}

// deleteProduct();

function readPlaylist() {
    console.log("SELECTING");
    var query = connection.query("SELECT * FROM playlist", function(err, res) {
        if (err) throw err;
        
        console.log(res);

        // console.log(res[0])
        connection.end();
    });
}

// readProducts();

function alterPlaylist() {
    console.log("ALTER TABLE");
    var query = connection.query(
        "ALTER TABLE playlist MODIFY COLUMN genre VARCHAR(255)"
    )
    console.log(query.sql);
    connection.end();
}

// alterTable();

function cobraCommander(command, tableID, arg) {
    switch(command) {
        case "create":
            createPlaylist();
            break;
        case "read":
            readPlaylist();
            break;
        case "update":
            updatePlaylist(tableID, arg);
            break;
        case "delete":
            deletePlaylist();
            break;
    }

}

cobraCommander(command, tableID, arg);
