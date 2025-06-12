const Category = require("../models/category")

const CategoryController = {
  // Busca todas as categorias
  async getAllCategory(req, res) {
    try {
      const category = await Category.findAll();
      return res.status(200).json(category);
    } catch (err) {
      return res.status(500).json({ message: 'Erro ao buscar categorias', error: err.message });
    }
  },

  // Busca categoria por ID
  async getCategoryById(req, res) {
    try {
        const { id } = req.params
        const category = await Category.findByPk(id)

        if (!category) {
            return res.status(404).json({message: "Categoria não encontrada" })
        }

        return res.status(200).json(category)
    } catch (err) {
        return res.status(500).json({ message: "Erro ao buscar a categoria", error: err.message})
    }
  },

  // Criar categoria
  async createCategory(req, res) {
    try {
        const { name, state } = req.body

        if (!name) {
            return res.status(400).json({ message: "O nome da categoria é obrigatório"})
        }

        const newCategory = await Category.create({
            name,
            state: state ?? true, // Como como ativo (true) caso não seja passado o status
        })

        return res.status(201).json(newCategory)
    } catch (err) {
        return res.status(500).json({ message: "Erro ao criar categoria", error: err.message})
    }
  },

  // Atualiza categoria por ID
  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { name, state } = req.body;

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(400).json({ message: "Categoria não encontrada" });
      }

      category.name = name ?? category.name;
      category.state = state ?? category.state;

      await category.save();

      return res.status(204).json({ message: "Categoria atualizada com sucesso", category });
    } catch (err) {
      return res.status(500).json({ message: "Erro ao atualizar a categoria", error: err.message });
    }
  },

  // Remove categoria por ID
  async deleteCategory(req, res) {
    try {
        const { id } = req.params

        const category = await Category.findByPk(id);

        if(!category){
            return res.status(404).json({ message: "Categoria não encontrada" })
        }

        await category.destroy()

        return res.status(200).json({ message: "Categoria deletada com sucesso" })
    } catch(err) {
        return res.status(500).json({ message: "Erro ao deletar categoria", error: err})
    }
  }
}

module.exports = CategoryController
