const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const Router = express.Router();

Router.post("/createuser", createUser);
Router.get("/users", getAllUsers);
Router.get("/user/:id", getUserById);
Router.patch("/user/:id", updateUserById);
Router.delete("/user/:id", deleteUserById);

module.exports = Router;
