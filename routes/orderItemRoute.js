const { OrderItemController } = require("../controllers");

const orderRoutes = require("express").Router();

orderRoutes.get("/", OrderItemController.getAllOrder);
orderRoutes.get("/:id", OrderItemController.getOrderItem)
orderRoutes.post("/add", OrderItemController.addOrder);
// orderRoutes.get("/delete/:id", OrderItemController.deleteOrder)

module.exports = orderRoutes;
