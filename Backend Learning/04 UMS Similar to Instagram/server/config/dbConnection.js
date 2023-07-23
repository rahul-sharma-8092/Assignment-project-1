import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
	const DB_URL = process.env.DB_URL;
	try {
		const conn = await mongoose.connect(DB_URL);
		console.log(`Database (${conn.connection.db.databaseName}) connected successfully`);
	} catch (err) {
		console.log("Error while connecting to Database", err.message);
	}
};

export default dbConnection;
