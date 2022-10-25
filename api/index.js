import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (error) {
    throw error;
  }
};

//MIDDLEWARES
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log(`server started on ${process.env.PORT}`);
});
