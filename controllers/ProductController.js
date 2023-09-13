const { product } = require("../models");
class ProductController {
  static async getProducts(req, res) {
    try {
      const result = await product.findAll();
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async findProduct(req, res) {
    try {
      const id = req.params.id;
      const result = await product.findOne({ where: { id } });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result,
        });
      } else {
        res.status(404).json({
          status: true,
          message: "product not found",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
  static async addProduct(req, res) {
    try {
      const { name, price, stock, status } = req.body;
      const result = await product.create({
        name,
        price,
        status,
        stock,
      });
      if (result !== null) {
        res.status(201).json({
          status: true,
          message: "product has been added",
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "product can't added in list",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async editProduct(req, res) {
    try {
      const id = req.params.id;
      const { name, price, status, stock } = req.body;

      const result = await product.update(
        {
          name,
          price,
          stock,
          status,
        },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
  static async editImage(req, res) {
    try {
    } catch (err) {}
  }
  static async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      const result = await product.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
}

module.exports = ProductController;
