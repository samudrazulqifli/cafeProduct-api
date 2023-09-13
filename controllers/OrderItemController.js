const {orderItem} = require("../models")

class OrderItemController {
    static async getOrderItem (req, res){
        try {
            const id = req.params.id
            const result = await orderItem.findOne({where: {orderId: id}})
            if(result !== null) {
                res.status(200).json({
                    status: true,
                    data:result
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: "order cannot found"
                })
            }
        } catch (err) {
            res.status(500).json({
                status:false,
                erorr: err
            })
        }
    }
    static async getAllOrder (req,res) {
        try {
            const result = await orderItem.findAll()
            res.status(200).json({
                status:true,
                data:result
            })
        } catch (err) {
            res.status(500).json({
                status:false,
                erorr:err
            })
        }
    }
    static async addOrder (req,res) {
        try {
            const {quantity, orderId, productId} = req.body
            const result = await orderItem.create({
                quantity, orderId, productId
            })
            res.status(201).json({
                status:true,
                message: "order has been added",
                data:result,
            })

        } catch(err) {
             res.status(500).json({
                status: false,
                erorr: err
             })
        }
    }

}

module.exports = OrderItemController