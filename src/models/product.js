// Carregando módulos
const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

// Criando tabela 
const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "category",
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Product