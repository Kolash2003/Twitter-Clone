import express from "express";
import { follow, getotherUsers, login, logout, register, unFollow } from "../controllers/userController.js";
import { getMyProfile } from "../controllers/userController.js";
import { isAuthenticated } from "../utils/isAuthenticated.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/me/:id", getMyProfile);
router.get("/logout", logout);
router.get("/otherUsers/:id", isAuthenticated, getotherUsers);
router.post("/follow/:followId", isAuthenticated, follow);
router.post("/unfollow/:followId", isAuthenticated, unFollow);

export default router;
