import Hotel from "../models/Hotel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";

export const createHotel = createOne(Hotel);
export const getHotel = getOne(Hotel);
export const updateHotel = updateOne(Hotel);
export const deleteHotel = deleteOne(Hotel);
export const getAllHotels = getAll(Hotel);
