import JWT from "jsonwebtoken";
const authenticateUser = async (req, res, next) => {
	const token = req.cookies.token || null;
	if (!token) {
		return res.status(400).json({
			success: false,
			message: "User not Authenticated",
		});
	}
	try {
		const payload = await JWT.verify(token, process.env.SECRET);
		req.user = { id: payload.id, username: payload.username };
		next();
	} catch (err) {
		return res.status(400).json({
			success: false,
			message: err.message,
		});
	}
};

export default authenticateUser;
