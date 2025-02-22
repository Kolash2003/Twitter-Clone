import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
    },
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
