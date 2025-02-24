import { Tweet } from "../models/tweetSchema.js";
import User from "../models/userSchema.js";

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

export const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({
        success: "false",
        message: "Tweet Not Found",
      });
    }

    let updatedTweet;

    if (tweet.likes.includes(loggedInUserId)) {
      // dislike

      updatedTweet = await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { likes: loggedInUserId },
      });
      return res.status(200).json({
        success: "true",
        message: "user disliked your tweet",
      });
    } else {
      // like

      updatedTweet = await Tweet.findByIdAndUpdate(tweetId, {
        $push: { likes: loggedInUserId },
      });
      return res.status(200).json({
        success: "true",
        message: "user liked your tweet",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;

    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({
        success: "false",
        message: "Tweet Not Found",
      });
    }

    let updatedTweet;

    if (tweet.bookmarks.includes(loggedInUserId)) {
      // dislike

      updatedTweet = await Tweet.findByIdAndUpdate(tweetId, {
        $pull: { bookmarks: loggedInUserId },
      });
      return res.status(200).json({
        success: "true",
        message: "user removed bookmark from your tweet",
      });
    } else {
      // like

      updatedTweet = await Tweet.findByIdAndUpdate(tweetId, {
        $push: { bookmarks: loggedInUserId },
      });
      return res.status(200).json({
        success: "true",
        message: "user bookmarked your tweet",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    return res.status(200).json({
      success: "true",
      message: "User details fetched",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTweets = async (req, res) => {
  try {
    const { id } = req.params;

    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({ userId: id }); // logged in user tweets

    const followingUserTweets = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    ); // Tweets from users you are folowing

    return res.status(200).json({
      success: "true",
      message: "All tweets sent",
      tweets: loggedInUserTweets.concat(...followingUserTweets),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFollowingTweets = async (req, res) => {
  try {
    const { id } = req.params;

    const loggedInUser = User.findById(id);
    const followingUsersTweets = await Promise.all(
      loggedInUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );

    return res.status(200).json({
      success: "true",
      message: "following users tweets sent",
      followingUsersTweets,
    });
  } catch (error) {
    console.log(error);
  }
};
