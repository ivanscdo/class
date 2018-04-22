// * A query which returns all data for songs sung by a specific artist
// * A query which returns all artists who appear within the top 5000 more than once
// * A query which returns all data contained within a specific range
// * A query which searches for a specific song in the top 5000 and returns the data for it

// **HINT*: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them.

var mysql = require("mysql");
var column = process.argv[2];
var query = process.argv[3];


var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306, 
    user: "root", 
    password: "", 
    database: "top_songsDB"
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("connected as id:", connection.threadId, "\n");
    allColumnByQuery(column, query);
    // console.log(column, query);
    // connection.end();
});

function allColumnByQuery(column, query) {
    console.log("allSongsByArtist()");
    switch(column){
        case "position":
            connection.query(
                "SELECT * FROM top5000 WHERE position <= ?",
                [query],
                function(error, result) {
                    if (error) throw error;

                    console.log(result);
                    connection.end();
                }
            );
            break;
        case "artist":
            connection.query(
                "SELECT * FROM top5000 WHERE ?",
                {artist: query},
                function(error, result) {
                    if (error) throw error;

                    console.log(result);
                    connection.end();
                }
            );
            break;
        case "song":
            connection.query(
                "SELECT * FROM top5000 WHERE ?",
                {song: query},
                function(error, result) {
                    if (error) throw error;

                    console.log(result);
                    connection.end();
                }
            );            
            break;
        case "year":
            connection.query(
                "SELECT * FROM top5000 WHERE ?",
                {year: query},
                function(error, result) {
                    if (error) throw error;

                    console.log(result);
                    connection.end();
                }
            );
            break;
        case "raw_total":
        connection.query(
            "SELECT * FROM top5000 WHERE raw_total >= ?",
            [query],
            function(error, result) {
                if (error) throw error;

                console.log(result);
                connection.end();
            }
        );
            break;
        case "raw_usa":
        connection.query(
            "SELECT * FROM top5000 WHERE raw_usa >= ?",
            [query],
            function(error, result) {
                if (error) throw error;

                console.log(result);
                connection.end();
            }
        );
            break;
        case "raw_uk":
        connection.query(
            "SELECT * FROM top5000 WHERE raw_uk >= ?",
            [query],
            function(error, result) {
                if (error) throw error;

                console.log(result);
                connection.end();
            }
        );
            break;
        case "raw_eur":
        connection.query(
            "SELECT * FROM top5000 WHERE raw_eur >= ?",
            [query],
            function(error, result) {
                if (error) throw error;

                console.log(result);
                connection.end();
            }
        );
            break;
        case "raw_row":
        connection.query(
            "SELECT * FROM top5000 WHERE raw_row >= ?",
            [query],
            function(error, result) {
                if (error) throw error;

                console.log(result);
                connection.end();
            }
        );
            break;
    }
}

// SELECT
// top3000.artist AS album_artist,
// top3000.position AS album_position, 
// album,
// top3000.year AS album_year, 
// top5000.position AS song_position,
// top5000.song AS song, 
// top5000.year AS song_year
// FROM top3000
// INNER JOIN top5000 ON top5000.year = top3000.year
// WHERE top3000.artist = "The Beatles" AND top5000.artist = "The Beatles";