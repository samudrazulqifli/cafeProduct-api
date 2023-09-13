const { ProfileController } = require("../controllers");

const profileRoutes = require("express").Router();

profileRoutes.get("/", ProfileController.getProfiles);
profileRoutes.get("/:id", ProfileController.findProfile)
profileRoutes.post("/add", ProfileController.addProfile);
profileRoutes.put("/update/:id", ProfileController.editProfile);
profileRoutes.get("/delete/:id", ProfileController.deleteProfile);

module.exports = profileRoutes;
