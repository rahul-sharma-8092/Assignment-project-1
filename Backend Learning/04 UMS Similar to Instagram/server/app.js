import express from "express";
const app = express();
import dbConnection from "./config/dbConnection.js";
import authRoutes from "./routes/authRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dbConnection();

// Middleware
app.use(
	cors({
		origin: "http://localhost:5500",
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoutes);

export default app;
