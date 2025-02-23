import express from "express";
import { bookmark, createTweet, deleteTweet, likeOrDislike } from "../controllers/tweetController.js";
import { isAuthenticated } from "../utils/isAuthenticated.js";

const router = express.Router();

router.post("/create", isAuthenticated, createTweet);
router.delete("/delete/:id", isAuthenticated, deleteTweet);
router.put("/likeDislike/:id", isAuthenticated, likeOrDislike);
router.put("/bookmark/:id", isAuthenticated, bookmark);

export default router;
