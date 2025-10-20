const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { signup } = require("../controllers/authcontroller");

const Router = express.Router();

Router.route("/").post(createUser).get(getAllUsers);

Router.post("/signup", signup);

Router.route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = Router;
