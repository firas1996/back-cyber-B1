const User = require("../models/userModel");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failll",
      message: error,
    });
  }
};

// get all users

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users: users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failll",
      message: error,
    });
  }
};
