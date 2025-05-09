import express from "express";
import {
  getCities,
  getCityParkingSpaces,
} from "../controllers/cities.controller.js";
const router = express.Router();

// router.post("/login", login);
router.get("/", getCities);
router.get("/parking-spaces/:cityId", getCityParkingSpaces);
export default router;
