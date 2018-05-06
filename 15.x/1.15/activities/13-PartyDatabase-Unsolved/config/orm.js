const connection = require("./connection");

var orm = {

    // allPartyNames: function() {
    //     connection.query("SELECT * FROM parties", function(error, result) {
    //         if (error) throw error;

    //         console.log(result);
    //     })
    // },
    selectAll: function(table, column, columnName){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    }, 
    allClientNames: function() {
        connection.query("SELECT client_name FROM clients", function (error, result) {
            if (error) throw error; 

            console.log(result);
        })
    },
    // allPartyGrownUp: function() {
    //     connection.query("")
    // }

    


}

module.exports = orm;



// * Console log all the party names.
// * Console log all the client names.

// * Console log all the parties that have a party-type of grown-up.
// * Console log all the clients and their parties.





