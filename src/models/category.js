// Carregando módulos
const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

// Criando tabela 
const Category = sequelize.define("Category", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: "category",
    timestamps: true
})

module.exports = Category