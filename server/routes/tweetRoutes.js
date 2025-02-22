import express from "express";
import { createTweet, deleteTweet } from "../controllers/tweetController.js";
import { isAuthenticated } from "../utils/isAuthenticated.js";

const router = express.Router();

router.post("/create", isAuthenticated, createTweet);
router.get("/delete/:id", isAuthenticated, deleteTweet);

export default router;
