import mongoose from "mongoose";
//price,maxpeople,desc,roomno.
const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A room must have a title"],
    },
    price: {
      type: Number,
      required: [true, "A room must have a price"],
    },
    description: {
      type: String,
      required: [true, "A room must have a description"],
    },
    maxPeople: {
      type: Number,
      required: [true, "A room must have a description"],
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: [Date],
      },
    ],
    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: "Hotel",
      required: [true, "Room must belong to a hotel"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Room", roomSchema);
