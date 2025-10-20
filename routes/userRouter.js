const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");

const Router = express.Router();

Router.post("/createuser", createUser);
Router.get("/users", getAllUsers);

module.exports = Router;
