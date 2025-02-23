import express from "express";
import { bookmark, createTweet, deleteTweet, likeOrDislike } from "../controllers/tweetController.js";
import { isAuthenticated } from "../utils/isAuthenticated.js";
import { getMyProfile, logout } from "../controllers/userController.js";

const router = express.Router();

router.post("/create", isAuthenticated, createTweet);
router.delete("/delete/:id", isAuthenticated, deleteTweet);
router.put("/likeDislike/:id", isAuthenticated, likeOrDislike);
router.put("/bookmark/:id", isAuthenticated, bookmark);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", logout);

export default router;
