import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const register = async (req, res) => {
  try {
    const { name, userName, email, password } = req.body;

    if (!name || !email || !password || !userName) {
      res.status(401).json({
        success: "false",
        message: "enter details for all the fields",
      });
    }

    let user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        success: "false",
        message: "User already exits",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      userName,
      email,
      password: hashedPassword,
    });
    sendCookie(user, res, `Registered Sucessfully`, 201);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({
        success: "false",
        message: "Enter all the details",
      });
    }

    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: "flase",
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        success: "false",
        message: "Invalid Email or password",
      });
    }

    sendCookie(user, res, `Welcome back ${user.userName}`);
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  return res.status(200).json({
    success: "true",
    message: "User details fetched",
  });
};

export const logout = (req, res) => {

  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message:"User logged out"
    });
};
