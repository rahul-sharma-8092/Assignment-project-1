import express from "express";
import { home, errorPage, userRegister, userLogin } from "../controller/user.Controller.js";

const router = express.Router();

router.get("/", home);

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/*", errorPage);

export default router;
