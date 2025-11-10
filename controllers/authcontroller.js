const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id, role, name) => {
  return jwt.sign({ id, name, role }, process.env.JWT_SECRET, {
    expiresIn: "180d",
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "email and password are required !!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "user does not exist !!!",
      });
    }
    // check password

    if (!(await user.verifPassword(password, user.password))) {
      res.status(400).json({
        message: "incorrect password !!!",
      });
    }

    //create token
    const token = createToken(user._id, user.role, user.name);
    res.status(200).json({
      status: "success",
      message: "you are logged in !!!",
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      status: "failll",
      message: error,
    });
  }
};
