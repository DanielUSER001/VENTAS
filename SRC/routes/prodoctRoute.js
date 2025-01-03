const express = require("express")
const router = express.Router()
const controllerProducto = require("../controllers/controllerProducto")

router.get("/", controllerProducto.getAllProduct)
router.get("/:id", controllerProducto.getProductById)
router.post("/", controllerProducto.createProduct)
router.put("/:id", controllerProducto.updateProduct)
router.delete("/:id", controllerProducto.deleteProduct)

module.exports = router