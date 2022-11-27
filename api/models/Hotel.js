import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A hotel must have a name"],
  },
  type: {
    type: String,
    required: [true, "A hotel must have a type"],
  },
  city: {
    type: String,
    required: [true, "A hotel must have a city"],
  },
  address: {
    type: String,
    required: [true, "A hotel must have address"],
  },
  distance: {
    type: String,
    required: [true, "A hotel must have distance"],
  },
  photos: [String],
  title: {
    type: String,
    required: [true, "A hotel must have a title"],
  },
  description: {
    type: String,
    required: [true, "A hotel must have a description"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: [true, "A hotel must have a cheapest price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", hotelSchema);
