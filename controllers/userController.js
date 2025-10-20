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

// Get User By Id

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failll",
      message: error,
    });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failll",
      message: error,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "failll",
      message: error,
    });
  }
};
