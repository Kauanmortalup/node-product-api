// Carregando Módulos
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();
const sequelize = require('./config/db')
const routes = require("./routes");

// Inicializando Express
const app = express();

// Configurando os middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// Inicializando rotas
app.use("/api", routes);

// Conecta e sincroniza o banco
sequelize.authenticate()
  .then(() => {
    console.log("✅ Conectado ao banco!");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("✅ Tabelas sincronizadas!");
  })
  .catch((err) => {
    console.error("❌ Erro na inicialização:", err);
  });

// Definindo porta e iniciando servidor express
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});