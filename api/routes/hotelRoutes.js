import express from "express";
const router = express.Router();

import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotelController.js";

router.route("/").post(createHotel).get(getHotels);

router.route("/:id").patch(updateHotel).delete(deleteHotel).get(getHotel);

export default router;
