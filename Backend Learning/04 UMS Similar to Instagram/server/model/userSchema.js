import mongoose from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			minLength: [3, "Name must be at 3 char"],
			trim: true,
		},
		username: {
			type: String,
			required: [true, "Username is required"],
			trim: true,
		},
		bio: {
			type: String,
			required: [true, "Bio is required"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			select: false,
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	this.password = await bcrypt.hash(this.password, 10);
	return next();
});

userSchema.methods = {
	jwtToken() {
		return JWT.sign({ id: this._id, username: this.username }, process.env.SECRET, {
			expiresIn: "24h",
		});
	},
};

const userModel = mongoose.model("user", userSchema);
export default userModel;
