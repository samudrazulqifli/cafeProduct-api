const { ProductController } = require("../controllers");

const productRoutes = require("express").Router();

productRoutes.get("/", ProductController.getProducts);
productRoutes.get("/:id", ProductController.findProduct)
productRoutes.post("/add", ProductController.addProduct);
productRoutes.put("/update/:id", ProductController.editProduct);
productRoutes.post("/imageProduct", ProductController.editImage);
productRoutes.get("/delete/:id", ProductController.deleteProduct);

module.exports = productRoutes;
