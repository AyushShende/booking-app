import express from "express";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} from "../controllers/hotelController.js";
import protect from "../middlewares/protect.js";
import restrictTo from "../middlewares/restrict.js";

router
  .route("/")
  .get(getAllHotels)
  .post(protect, restrictTo("admin"), createHotel);

router
  .route("/:id")
  .get(getHotel)
  .patch(protect, restrictTo("admin"), updateHotel)
  .delete(protect, restrictTo("admin"), deleteHotel);

export default router;
