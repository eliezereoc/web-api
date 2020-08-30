const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Cliente = sequelize.define("cliente",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(150),
        validate: {
            len: [10, 150]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(150),  
        validate: {
            len: [10, 150]
        }
    }
});


module.exports = Cliente;