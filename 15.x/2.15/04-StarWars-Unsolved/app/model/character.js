var Sequelize = require("sequelize");

var schema = require("../config/connection");

var Character = schema.define("character", {
    routeName: {
        type: Sequelize.STRING
    }, 
    name: {
        type: Sequelize.STRING
    },
     role: {
         type: Sequelize.STRING
     },
     age: {
         type: Sequelize.INTEGER 
     },
     forcePoints: {
         type: Sequelize.INTEGER
     }
     // if all we are speficying is type, don't need an objc
});

Character.synch();

module.exports = Character; 