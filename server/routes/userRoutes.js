import express from "express";
import { login, logout, register } from "../controllers/userController.js";
import { getMyProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/me/:id", getMyProfile);
router.get("/logout", logout);

export default router;
