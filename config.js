module.exports = {
    development: {
        username: "root",
        password: "password",
        database: "todolist",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
    production: {
        username: "root",
        password: "todolist",
        database: "todolist",
        host: "database-2.cd17p770hwyy.us-east-2.rds.amazonaws.com",
        port: 3306,
        dialect: "mysql"
    }
}