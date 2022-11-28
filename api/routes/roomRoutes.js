import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/roomController.js";
import protect from "../middlewares/protect.js";
import restrictTo from "../middlewares/restrict.js";
const router = express.Router();

router
  .route("/")
  .get(getAllRooms)
  .post(protect, restrictTo("admin"), createRoom);

router
  .route("/:id")
  .get(getRoom)
  .patch(protect, restrictTo("admin"), updateRoom)
  .delete(protect, restrictTo("admin"), deleteRoom);

export default router;
