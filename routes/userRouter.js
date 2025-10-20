const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

const Router = express.Router();

Router.post("/createuser", createUser);
Router.get("/users", getAllUsers);
Router.get("/user/:id", getUserById);

module.exports = Router;
