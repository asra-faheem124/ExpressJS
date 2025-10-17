import express from "express";
import productController from "../controllers/productController.mjs";

let productRouter = express.Router();

productRouter
.get('/', productController.allProducts)
.get('/:id', productController.productById)
.post('/add', productController.addProduct)
.put('/:id', productController.updateProduct)
.delete('/:id', productController.deleteProduct)

export default productRouter