const {Sequelize} = require ('sequelize')//ORM-библиотека осуществляет сопоставление таблиц в БД и отношений между ними с классами.

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)