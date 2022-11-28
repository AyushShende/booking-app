import User from "../models/User.js";
import AppError from "../utils/appError.js";
import catchAsync from "./catchAsync.js";
import { promisify } from "util";
import jwt from "jsonwebtoken";

const protect = catchAsync(async (req, res, next) => {
  //1. Getting token and check if it's there
  const token = req.cookies.access_token;

  if (!token) {
    return next(
      new AppError("You are not logged in, please log in to get access", 401)
    );
  }

  //2. Verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3. Check if the user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user to whom this token belonged, no longer exists",
        401
      )
    );
  }

  //4. Check if user has changed password after the token was issued.
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password. Please log in again", 401)
    );
  }

  // 5. Grant access to PROTECTED Route
  req.user = currentUser;
  next();
});

export default protect;
