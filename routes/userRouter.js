const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { signup, login } = require("../controllers/authcontroller");

const Router = express.Router();

Router.route("/").post(createUser).get(getAllUsers);

Router.post("/signup", signup);
Router.post("/login", login);

Router.route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = Router;
