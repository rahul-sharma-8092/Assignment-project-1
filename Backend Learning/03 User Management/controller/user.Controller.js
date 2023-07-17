import User from "../model/user.schema.js";

// Home Page
export const home = (req, res) => {
	res.send("<h1>Home Page</h1>");
};

// User Registration
export const userRegister = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const user = await User.create({ name, email, password });
		res.status(201).json({
			msg: "User Registered Successfully",
			user: user,
		});
	} catch (err) {
		console.log("User registration failed ", err.message);
		res.status(400).send({ msg: "User registration failed" });
	}
};

// User Login
export const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			if (user.password == password) {
				res.status(200).json({ msg: "User login successfully" });
			} else {
				res.status(200).json({ msg: "Password is wrong" });
			}
		} else {
			res.status(200).json({ msg: "No account associate with this email" });
		}
	} catch (err) {
		console.log("Error in User Login", err);
	}
};

// Error Page
export const errorPage = (req, res) => {
	res.status(404).json({
		msg: "Page Not Found! Please use /register or /login",
	});
};
