const loginDatavalidate = (req, res, next) => {
	const { username, password } = req.body;
	// All fields are required
	if (username && password) {
		return next();
	} else {
		return res.status(400).json({
			success: false,
			message: "All fields are required",
		});
	}
};

export default loginDatavalidate;
