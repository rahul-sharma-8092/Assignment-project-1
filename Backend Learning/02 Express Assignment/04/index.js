import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
	res.send("Random Number Generator");
});

// Random Number Generator
let randomNum = 0;
app.get("/random", (req, res) => {
	randomNum = parseInt(Math.random() * 100);
	res.send({ random: randomNum });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
