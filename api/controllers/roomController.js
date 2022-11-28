import Room from "../models/Room.js";
import {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} from "./handlerFactory.js";

export const createRoom = createOne(Room);
export const getRoom = getOne(Room);
export const updateRoom = updateOne(Room);
export const deleteRoom = deleteOne(Room);
export const getAllRooms = getAll(Room);
