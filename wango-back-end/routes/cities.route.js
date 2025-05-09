import express from "express";
import {
  getCities,
  getCityParkingSpaces,
} from "../controllers/cities.controller";
const router = express.Router();

// router.post("/login", login);
router.get("/cities", getCities);
router.get("/parking-spaces", getCityParkingSpaces);
export default router;
