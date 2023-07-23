import express from "express";
import { userSignup, userLogin, getUserInfo } from "../controller/authController.js";
import signupValidator from "../middleware/signup.validator.js";
import loginDatavalidate from "../middleware/loginDataValidate.js";
import authenticateUser from "../middleware/authenticateUser.js";

const authRoutes = express.Router();

authRoutes.post("/signup", signupValidator, userSignup);
authRoutes.post("/login", loginDatavalidate, userLogin);
authRoutes.get("/", authenticateUser, getUserInfo);

export default authRoutes;
