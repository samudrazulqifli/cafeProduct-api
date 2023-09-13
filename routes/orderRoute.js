const { OrderController } = require("../controllers");

const orderRoutes = require("express").Router();

orderRoutes.get("/", OrderController.getOrders);
orderRoutes.get("/:id", OrderController.findOrder)
orderRoutes.post("/add", OrderController.addOrder);
orderRoutes.put("/update", OrderController.editOrder);
module.exports = orderRoutes;
