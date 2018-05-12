// declare variable db and require models directory
var db = require("../models");

module.exports = function(app) {
    app.get("/api/test", function(req,res) {
        db.Test.findAll({}).then(function(result) {
            res.json(result);
        });
    });

    app.post("/api/test", function(req, res) {
        console.log(req.body);
        db.Test.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(result) {
        res.json(result);
        })
        .catch(function(error) {
            res.json(error);
        });

    });

    // app.put("", function(req, res) {

    // });

    app.post("/api/delete", function(req, res) {
        console.log("api/delete!");
        console.log(req.body);
        db.Test.destroy({
            where: {
                id: req.body.id
            }
        });
    });
};







// declaring variable express and requiring express in order to use router method
// var express = require("express");
// var router = express.Router();

// router.get("/api/test", function(req,res) {
//     db.Test.findall({}).then(function(result) {
//         res.json(result);
//     });
// });

// router.post("/api/test", function(req, res) {
//     db.Test.create({
//         email: req.body.email,
//         password: req.body.password
//     }).then(function(result) {
//         res.json(result);
//     });

// });

// // router.put("", function(req, res) {

// // });

// // router.delete("", function(req, res) {

// // });

// module.exports = router;

