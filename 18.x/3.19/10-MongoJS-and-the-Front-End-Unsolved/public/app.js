/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// module.exports = function(app) {
//   app.get("/all", function(req, res) {
//     // var query = {};
//     // if (req.query.author_id) {
//     //   query.AuthorId = req.query.author_id;
//     // }
//     // db.Post.findAll({
//     //   where: query
//     // }).then(function(dbPost) {
//     //   res.json(dbPost);
//     // });
//     res.json(res);
//   });
// }

function mongoTable (req) {
  for(i = 0; i < req.length; i++) {
    console.log(req);

  }
}

$("#weight-sort").on("click", function(){
  $.get("/weight", function(req, res) {
    // res.json(res);
    // console.log(req);
    // console.log(req.length)
    mongoTable(req);
  });
});


$("#name-sort").on("click", function(){
  $.get("/name", function(req, res) {
    // res.json(res);
    console.log(req);
  });
});




// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});
