module.exports = {
    development: {
        username: "root",
        password: "password",
        database: "todolist",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: "password",
        database: "todolist",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
    production: {
        username: "",
        password: "",
        database: "",
        host: "",
        port: 3306,
        dialect: "mysql"
    }
}