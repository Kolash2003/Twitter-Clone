import { Tweet } from "../models/tweetSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;

    if (!description) {
      return res.status(404).json({
        success: "false",
        message: "All fields should be filled first",
      });
    }

    const tweet = await Tweet.create({
      description,
      userId: id,
    });

    return res.status(201).json({
      success: "true",
      message: "Tweet created sucssfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    const tweet = Tweet.findById(id);
    await tweet.deleteOne();

    return res.status(201).json({
      success: "true",
      message: "tweet deleted Sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};
