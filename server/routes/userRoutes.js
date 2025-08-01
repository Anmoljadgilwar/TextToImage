import {
  registerUser,
  loginUser,
  userCredits,
  paymentRazorpay,
  verifyRazorpay,
} from "../controllers/userController.js";
import express from "express";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/razorpay", userAuth, paymentRazorpay);
userRouter.post("/verifyRazorpay", verifyRazorpay);

export default userRouter;

//localhost:4000/api/user/register
//localhost:4000/api/user/login
