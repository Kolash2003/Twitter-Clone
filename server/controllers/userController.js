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
      message: "User logged out",
    });
};

export const getotherUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const otherUsers = await User.find({ _id: { $ne: id } });

    if (!otherUsers) {
      return res.status(401).json({
        message: "No Other Users found",
      });
    }

    res.status(200).json({
      success: "true",
      otherUsers,
    });
  } catch (error) {
    console.log(error);
  }
};

export const follow = async (req, res) => {
  try {
    const { loggedInId } = req.body;
    const { followId } = req.params;

    const loggedInUser = await User.findById(loggedInId);
    const followUser = await User.findById(followId);

    // console.log("loggedInId:", loggedInId);
    // console.log("followId:", followId);

    if (!loggedInUser || !followUser) {
      return res.status(404).json({
        success: "false",
        message: "User not found",
      });
    }

    if (!followUser.followers.includes(loggedInId)) {
      await followUser.updateOne({ $push: { followers: loggedInId } });
      await loggedInUser.updateOne({ $push: { following: followId } });
    } else {
      return res.status(400).json({
        message: `user already follows ${followUser.name}`,
      });
    }

    return res.status(200).json({
      success: "true",
      message: `${loggedInUser.name} just followed ${followUser.name}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const unFollow = async (req, res) => {
  try {
    const { loggedInId } = req.body;
    const { followId } = req.params;

    const loggedInUser = await User.findById(loggedInId);
    const followUser = await User.findById(followId);

    // console.log("loggedInId:", loggedInId);
    // console.log("followId:", followId);

    if (!loggedInUser || !followUser) {
      return res.status(404).json({
        success: "false",
        message: "User not found",
      });
    }

    if (followUser.followers.includes(loggedInId)) {
      await followUser.updateOne({ $pull: { followers: loggedInId } });
      await loggedInUser.updateOne({ $pull: { following: followId } });
    } else {
      return res.status(400).json({
        message: `user does not follows ${followUser.name}`,
      });
    }

    return res.status(200).json({
      success: "true",
      message: `${loggedInUser.name} just unfollowed ${followUser.name}`,
    });
  } catch (error) {
    console.log(error);
  }
};
