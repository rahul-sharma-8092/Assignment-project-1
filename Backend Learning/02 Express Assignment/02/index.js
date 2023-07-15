const express = require("express");

const app = express();
const PORT = 8080;

let counter = 0;

// Fetching
app.get("/", (req, res) => {
	res.json({ Counter: counter });
});

// Increment
app.post("/increment", (req, res) => {
	counter++;
	res.json({ Counter: counter });
});

// Decrement
app.post("/decrement", (req, res) => {
	counter--;
	res.json({ Counter: counter });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
