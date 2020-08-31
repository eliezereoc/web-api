module.exports = {
    developments = {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'cliente',
            dialect: 'mysql',
            user: 'root',
            password: '123456'
        }
    },
    production: {
        database:{
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}