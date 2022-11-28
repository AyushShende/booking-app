import catchAsync from "../middlewares/catchAsync.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

export const createHotel = createOne(Hotel);
export const getHotel = getOne(Hotel, { path: "rooms" });
export const updateHotel = updateOne(Hotel);
export const getAllHotels = getAll(Hotel);
export const deleteHotel = deleteOne(Hotel);

export const removeRoomsOnHotelDelete = catchAsync(async (req, res, next) => {
  await Room.deleteMany({ hotel: req.params.id });
  next();
});
