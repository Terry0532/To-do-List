module.exports = function (sequelize, DataTypes) {
    let todos = sequelize.define("todos", {
        progress: DataTypes.INTEGER,
        content: DataTypes.TEXT
    });
    return todos;
}