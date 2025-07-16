const Category = require("../models/category");
const Product = require("../models/product");

const productSeeder = async () => {
  try {
    const categories = await Category.findAll();

    if (categories.length === 0) {
      console.log("Nenhuma categoria encontrada. Pulando seed de produtos.");
      return;
    }

    const products = [
      {
        name: "Product 1",
        quantity: 4,
        price: 100,
        categoryId: categories[0].id,
      },
      {
        name: "Product 2",
        quantity: 23,
        price: 15.5,
        categoryId: categories[0].id,
      },
      {
        name: "Product 3",
        quantity: 47,
        price: 73.2,
        categoryId: categories[0].id,
      }
    ];

    const existingCount = await Product.count();
    if (existingCount === 0) {
      await Product.bulkCreate(products);
      console.log("Produtos inseridos com sucesso!");
    } else {
      console.log("Produtos já existentes. Nenhum dado inserido.");
    }
  }catch (err){
    console.error("Erro ao inserir produtos:", err);
  }
  
};

module.exports = productSeeder;