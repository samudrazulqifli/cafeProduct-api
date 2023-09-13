const models = require("../models");
const profile = models.profile;

class ProfileController {
  static async getProfiles(req, res) {
    try {
      const result = await profile.findAll();
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        error: err,
      });
    }
  }

  static async addProfile(req, res) {
    try {
      const { name, tableNumber } = req.body;
      const result = await profile.create({
        name,
        tableNumber
      });
      result !== null
        ? res.status(200).json({
            status: true,
            message: "profile has been create",
            data: result,
          })
        : res.status(200).json({
            status: false,
            message: "profile failed to create",
          });
    } catch (err) {
      res.status(500).json({
        status: false,
        error: err,
      });
    }
  }

  static async findProfile(req, res) {
    try {
      const id = req.params.id;
      const result = await profile.findOne({
        where: { id },
      });
      if (result === null) {
        res.status(404).json({
          status: true,
          message: "cannot find",
        });
      } else {
        res.status(201).json({
          status: true,
          data: result,
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: "cannot process",
        error: err,
      });
    }
  }

  static async editProfile(req, res) {
    try {
      const id = req.params.id;
      const { name, tableNumber } = req.body;
      const result = await profile.update(
        {
          name,
          tableNumber,
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
        error: err,
      });
    }
  }
  static async deleteProfile(req, res) {
    try {
      const id = req.params.id
      const result = await profile.destroy({
        where: {id}
      })
      res.status(200).json({
        status:true,
        message:"profile has been delete", 
        data: result
      })
    } catch (err) {
      res.status(500).json({
        status:false,
        erorr:err
      })
    }
  }
}

module.exports = ProfileController;
