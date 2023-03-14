import User from "../model/user.js";
import bcrypt from "bcrypt";
import validator from "validator";
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      location: "getAllUsers",
      message: error.message,
    });
  }
};
// loging user

export const loginUser = async (req, res) => {
  try {
    res.status(200).json({ mssg: "login" });
  } catch (error) {
    res.status(400).json({ mssg: "error" });
  }
};

// signup user
export const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw Error("email and password fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("email must be valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("password must be strong");
    }
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ mssg: "user alredy exists" });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      location: "in the signuUser ",
      message: error.message,
    });
  }
};
