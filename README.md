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
- Docker
- Postman (para testes)
- Dotenv (variáveis de ambiente)

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto (no mesmo nível da pasta src), com base no modelo abaixo:

```env
PORT=5295
DB_USER=sa
DB_PASSWORD=123Senha123.
DB_NAME=tempdb
DB_HOST=db
DB_PORT=1433
DB_DIALECT=mssql
DB_TRUST=true
```

## 🧪 Como testar a API localmente com Docker

1 - Clone o repositório:
git clone https://github.com/Kauanmortalup/node-product-api.git

2 - Crie um .env na raiz do projeto com base no exemplo fornecido acima.

3 - Suba os containers com Docker Compose:
docker-compose up -d

4 - Use o Postman ou qualquer cliente HTTP para testar os endpoints:

- POST /product → Criar produto
- GET /product → Listar produtos
- PUT /product/:id → Atualizar produto
- DELETE /product/:id → Deletar produto

(Utilize o /category para testar as categorias)

Exemplo rota completa http://localhost:5295/api/product

