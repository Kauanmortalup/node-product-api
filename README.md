# 🛠️ Node Product API

API RESTful desenvolvida com **Node.js**, **Express**, **Sequelize** e **SQL Server**, que permite realizar operações de **CRUD (Create, Read, Update, Delete)** para gerenciamento de **produtos e categorias**.

## 📦 Funcionalidades

- Criar, listar, editar e excluir **produtos**
- Criar, listar, editar e excluir **categorias**
- Validação de dados obrigatórios
- Verificação se a categoria está ativa (status `true`)
- Organização com estrutura modularizada

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Sequelize (ORM)
- SQL Server
- Postman (para testes)
- Dotenv (variáveis de ambiente)

## 📁 Estrutura do projeto

backend/
  ├── .env␣␣
  └── src/␣␣
        ├── config/␣␣
        ├── controllers/␣␣
        ├── models/␣␣
        ├── routes/␣␣
        └── server.js␣␣

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` com base no modelo abaixo:

```env
PORT=5295
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_HOST=localhost
DB_DIALECT=mssql
DB_TRUST=true
```

## Como testar a API

Use o Postman ou qualquer cliente HTTP para testar os endpoints:

POST /product → Criar produto␣␣
GET /product → Listar produtos␣␣
PUT /product/:id → Atualizar produto␣␣
DELETE /product/:id → Deletar produto␣␣

(Utilize o /category para testar as categorias)

