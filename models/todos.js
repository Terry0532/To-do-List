module.exports = function (sequelize, DataTypes) {
    let todos = sequelize.define("todos", {
        progress: DataTypes.STRING,
        content: DataTypes.TEXT
    });
    return todos;
}