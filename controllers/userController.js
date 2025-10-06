const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    console.log("aa", req.body);
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
