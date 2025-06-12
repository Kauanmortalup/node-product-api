const Product = require("../models/product")
const Category = require("../models/category")

const ProductController = {
    // Busca todas os produtos
    async getAllProduct(req, res) {
        try {
            const product = await Product.findAll()
            return res.status(200).json(product)
        } catch(err) {
            return res.status(500).json({ message: "Erro ao buscar produtos ", error: err})
        }
    },

    // Busca produto por ID
    async getProductById(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findByPk(id)

            if(!product){
                return res.status(404).json({ message: "Produto não encontrado"})
            }

            return res.status(200).json(product)
        } catch(err) {
            return res.status(500).json({ message: "Erro ao buscar produto ", error: err })
        }
    },

    // Criar produto
    async createProduct(req, res) {
        try {
            const {name, categoryId, quantity, price} = req.body

            if(!name) {
                return res.status(400).json({ message: "O nome do produto é obrigatório!"})
            }
            if(!categoryId) {
                return res.status(400).json({ message: "A categoria do produto é obrigatório!"})
            }

            // Verifica se a categoria existe
            const categoryExists  = await Category.findOne({
                where: {
                    id: categoryId,
                    state: true
                }
            })
            if(!categoryExists ){
                return res.status(400).json({ message: "categoria não encontrada ou invalida"})
            }

            const newProduct = await Product.create( {
                name,
                categoryId,
                quantity: quantity ?? 0, // Se não informa a quantidade preenche com 0
                price: price ?? 0, // Se não informa o valor preenche com 0
            })
            
            return res.status(201).json(newProduct)
        } catch(err) {
            return res.status(500).json({ message: "Erro ao cadastrar produto ", error: err})
        }
    },

    // Atualiza produto por ID
    async updateProduct(req, res) {
        try {
            const { id } = req.params
            const { name, categoryId, quantity, price} = req.body

            const product = await Product.findByPk(id)

            if(!product) {
                return res.status(404).json({ message: "Produto não encontrado"})
            }

            // Verifica se a categoria existe
            const categoryExists  = await Category.findOne({
                where: {
                    id: categoryId,
                    state: true
                }
            })
            if(!categoryExists ){
                return res.status(400).json({ message: "categoria não encontrada ou invalida"})
            }

            product.name = name ?? product.name
            product.categoryId = categoryId ?? product.categoryId
            product.quantity = quantity ?? product.quantity
            product.price = price ?? product.price

            await product.save()

            return res.status(204).json({ message: "Produto atualizado com sucesso ", product})
        }catch (err) {
            return res.status(500).json({ message: "Erro ao atualizar produto ", error: err})
        }
    },

    // Remove produto por ID
    async deleteProduct(req, res) {
        try {
            const { id } = req.params

            const product = await Product.findByPk(id)

            if(!product){
                return res.status(404).json({ message: "Produto não encontrado"})
            }

            await product.destroy()

            return res.status(200).json({ message: "Produto deletado com sucesso"})
        }catch(err) {
            return res.status(500).json({ message: "Erro ao remover produto ", error: err})
        }
    }
}

module.exports = ProductController