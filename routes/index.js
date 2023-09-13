const routes = require("express").Router();
routes.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Project1",
  });
});

const profileRoute = require("./profileRoute")
const orderItemRoute = require("./orderItemRoute")
const orderRoute = require("./orderRoute")
const productRoute = require("./productRoute")

routes.use("/products",productRoute)
routes.use("/profiles",profileRoute)
routes.use("/orders", orderRoute)
routes.use("/orderItems", orderItemRoute)

module.exports = routes;
