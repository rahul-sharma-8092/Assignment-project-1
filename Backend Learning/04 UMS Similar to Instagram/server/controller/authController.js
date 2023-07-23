import userModel from "../model/userSchema.js";
import emaiValidator from "email-validator";
import bcrypt from "bcrypt";

export const userSignup = async (req, res) => {
	const { name, username, email, password, bio } = req.body;

	// Validate Email
	const validEmail = emaiValidator.validate(email);
	if (!validEmail) {
		return res.status(400).json({
			success: false,
			message: "Please provide a Email-Id",
		});
	}

	try {
		const user = new userModel(req.body);
		const result = await user.save();

		return res.status(200).json({
			success: true,
			message: "User registered successfully",
			User: result,
		});
	} catch (err) {
		if (err.code === 11000) {
			return res.status(400).json({
				success: false,
				message: `Account already associate with this email ${email}`,
			});
		}
		// console.log(err.message);
		return res.status(400).json({
			success: false,
			message: err.message,
		});
	}
};

export const userLogin = async (req, res) => {
	const { username, password } = req.body;
	// console.log(username, password);

	try {
		// Fetch user from DB
		const user = await userModel.findOne({ username }).select("+password");

		// Password matched
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.status(400).json({
				success: false,
				message: "Invalid creditinals",
			});
		}
		// Generate token
		const token = user.jwtToken();
		user.password = undefined;

		const cookieOptions = {
			maxAge: 24 * 60 * 60 * 1000,
			httpOnly: true,
		};
		// Send token to respond
		res.cookie("token", token, cookieOptions);
		res.status(200).json({
			success: true,
			message: "User login successfully",
			user: user,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			message: err.message,
		});
	}
};

export const getUserInfo = async (req, res) => {
	const { id, username } = req.user;

	try {
		const userInfo = await userModel.findOne({ username });
		res.status(200).json({
			success: true,
			user: userInfo,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			message: err.message,
		});
	}
};
