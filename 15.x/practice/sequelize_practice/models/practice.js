module.exports = function(sequelize, DataTypes) {
    var Test = sequelize.define("Test", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Test;
};