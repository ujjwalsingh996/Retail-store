const Sequelize = require('sequelize');

const sequelize = new Sequelize('retail_store', 'root', '9a3e#8e8', {
    dialect: "mysql",
    host: 'localhost',
    logging: console.log
})

module.exports = sequelize;