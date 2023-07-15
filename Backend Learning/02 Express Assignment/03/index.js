const express = require("express");

const app = express();

const PORT = 8080;

// Routes
app.get("/", (req, res) => {
	res.send({ msg: "I am Home Page" });
});

// About Page
app.get("/about", (req, res) => {
	res.send({ msg: "I am About Page" });
});

// Contact
app.get("/contact", (req, res) => {
	res.send({ email: "support@pwskills.com" });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
