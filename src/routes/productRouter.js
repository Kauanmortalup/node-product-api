// Inicializando modulos
const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/productController")

// Definindo rotas
router.get("/", ProductController.getAllProduct)
router.get("/:id", ProductController.getProductById)
router.post("/", ProductController.createProduct)
router.put("/:id", ProductController.updateProduct)
router.delete("/:id", ProductController.deleteProduct)

module.exports = router