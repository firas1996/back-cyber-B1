const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required !!!"],
    minlength: 5,
  },
  email: {
    type: String,
    required: [true, "The email is required !!!"],
    validate: [validator.isEmail, "Email is invalid !!!"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    validate: function (cPass) {
      return cPass === this.password;
    },
    message: "The password are not the same !!!",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  dateOfLastPaswordUpdate: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  return next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
