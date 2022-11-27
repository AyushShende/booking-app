import express from "express";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} from "../controllers/hotelController.js";

router.route("/").get(getAllHotels).post(createHotel);

router.route("/:id").get(getHotel).patch(updateHotel).delete(deleteHotel);

export default router;
