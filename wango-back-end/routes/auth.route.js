import express from "express";
import { login, signUp } from "../controllers/auth.controller.js";
const router = express.Router();

// router.post("/login", login);
router.post("/sign-up", signUp);
router.post("/login", login);


export default router;
