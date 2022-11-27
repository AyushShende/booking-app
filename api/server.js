import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting Down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const connect = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connection successful");
  });
};

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log(`server started on ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting Down...");
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});
