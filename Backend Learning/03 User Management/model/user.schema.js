import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is mandatory"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is mandatory"],
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Password is mandatory"],
		trim: true,
	},
});

export default mongoose.model("user", userSchema);
