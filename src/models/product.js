// Carregando módulos
const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

// Criando tabela 
const Product = sequelize.define("Product", {
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "category",
            key: "id"
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

module.exports = Product