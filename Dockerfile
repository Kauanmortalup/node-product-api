# Usa imagem oficial do Node.js
FROM node:18

# Cria diretório dentro do container
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta (ajuste se usar outra)
EXPOSE 5295

# Comando para iniciar a API
CMD ["node", "src/server.js"]
