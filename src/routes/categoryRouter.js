// Iniciando modulos
const express = require("express")
const router = express.Router()
const CategoryController = require('../controllers/categoryController')

// Definição das rotas
router.get("/", CategoryController.getAllCategory)
router.get("/:id", CategoryController.getCategoryById)
router.post("/", CategoryController.createCategory)
router.put("/:id", CategoryController.updateCategory)
router.delete("/:id", CategoryController.deleteCategory)

module.exports = router
