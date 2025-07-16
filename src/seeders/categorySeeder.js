const Category = require("../models/category");

const categorySeeder = async () => {
  try {
    const count = await Category.count();

    if (count === 0) {
      await Category.bulkCreate([
        { name: "Sem-Categoria", state: true },
        { name: "Tecnologia", state: true },
        { name: "Alimentos", state: true },
        { name: "Moda", state: false }
      ]);

      console.log("Categorias inseridas com sucesso!");
    } else {
      console.log("Categorias já existem. Nenhuma inserção feita.");
    }
  } catch (err) {
    console.error("Erro ao inserir categorias:", err);
  }
};

module.exports = categorySeeder;
