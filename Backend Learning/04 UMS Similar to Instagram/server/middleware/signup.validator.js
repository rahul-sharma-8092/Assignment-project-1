const signupValidator = (req, res, next) => {
	const { name, username, email, password, bio } = req.body;

	// All fields are required
	if (name && username && email && password && bio) {
		next();
	} else {
		return res.status(400).json({
			success: false,
			message: "All fields are required",
		});
	}
};

export default signupValidator;
