const categorySeeder = require("./categorySeeder");
const productSeeder = require("./productSeeder");

async function runSeed() {
  try {
    console.log('Iniciando seed...');
    await categorySeeder(); // insere categorias
    await productSeeder();  // insere produtos
    console.log('✅ Seed finalizado com sucesso!');
  } catch (err) {
    console.error('Erro ao executar seed:', err);
    throw err;
  }
}

module.exports = runSeed;