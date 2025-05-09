import express from "express";
import {
  endSession,
  getCities,
  getCityParkingSpaces,
  getSession,
  newSession,
} from "../controllers/cities.controller.js";
const router = express.Router();

// router.post("/login", login);
router.get("/", getCities);
router.get("/parking-spaces/:cityId", getCityParkingSpaces);
router.post("/new-session", newSession);
router.get("/parking-session/:id", getSession);
router.post("/parking-session/end", endSession);
export default router;
