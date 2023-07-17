import mongoose from "mongoose";

export const dbConnection = async () => {
	const DB_URI = process.env.DB_URI;
	try {
		await mongoose.connect(DB_URI);
		console.log("DATABASE Connected Successfully");
	} catch (err) {
		console.log("Error while connecting to DATABASE ", err);
	}
};
