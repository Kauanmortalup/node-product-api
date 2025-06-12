// Este arquivo centraliza todas as rotas
// Iniciando modulos
const express = require("express")
const router = express.Router()
const categoryRouter = require("./categoryRouter")
const productRouter = require("./productRouter")

router.use("/category", categoryRouter)
router.use("/product", productRouter)

module.exports = router;