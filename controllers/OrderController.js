const { order } = require ("../models")
class OrderController {
  static async getOrders(req, res) {
    try {
      const result = await order.findAll()
      res.status(200).json({
        status:true,
        data:result
      })
    } catch (err) {
      res.status(500).json({
        status:false,
        error:err
      })
    }
  }
  static async addOrder(req, res) {
    try {
     const {status,profileId} = req.body
     const result = await order.create({
      status,
      profileId
     })
     res.status(201).json({
      status:true,
      message: "order has been created",
      data: result
     })
    } catch (err) {
      res.status(500).json({
        status:false,
        erorr: err
      })
    }
  }

  static async findOrder (req,res) {
    try {
      const id = req.params.id
      const result = await order.findOne({where:{profileId: id}})
      if(result === null) {
        res.status(404).json({
          status: true,
          message: "order cannot found"
        })
      } else {
        res.status(200).json({
          status: true,
          data: result
        })
      }
    } catch(err) {
      res.status(500).json({
        status:false,
        erorr:err
      })
    }
  }
  static async editOrder(req, res) {
    try {
      const id = req.params.id
      const {status,profileId} = req.body
      
      const result = await order.update({
        status,
        profileId
      }, {where:{id}}
      )

      res.status(200).json({
        status: true,
        data: result
      })
    } catch (err) {
      res.status(500).json({
        status:false,
        erorr:err
      })
    }
  }
  static async deleteOrder(req, res) {
    try {
      const id = req.params.id
  
      const result = await order.destroy({where:{id}})
      res.status(200).json({
        status: false,
        data: result
      })
    } catch (err) {}
  }
}

module.exports = OrderController;
