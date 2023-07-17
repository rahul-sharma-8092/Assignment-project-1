import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import { dbConnection } from "./config/dbConnection.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
	dbConnection();
	console.log(`Server is running on http://localhost:${PORT}`);
});
