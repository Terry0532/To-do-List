module.exports = {
    development: {
        username: process.env.development_username,
        password: process.env.development_password,
        database: process.env.development_database,
        host: process.env.development_host,
        port: 3306,
        dialect: "mysql"
    },
    production: {
        username: process.env.production_username,
        password: process.env.production_password,
        database: process.env.production_database,
        host: process.env.production_host,
        port: 3306,
        dialect: "mysql"
    }
}