const http = require("http");

const PORT = 8080;
const hostname = "localhost";

const server = http.createServer((req, res) => {
	if (req.url == "/") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		res.end("<h1>Welcome to Men & Women Dummy Data</h1>");
	} else if (req.url == "/men") {
		const options = {
			hostname: "fakestoreapi.com",
			path: "/users",
			method: "GET",
		};

		const apiReq = http.request(options, (apiRes) => {
			let data = "";
			apiRes.on("data", (chunk) => {
				data += chunk;
			});

			apiRes.on("end", () => {
				res.statusCode = 200;
				res.setHeader("Content-Type", "application/json");
				res.end(data);
			});
		});

		apiReq.on("error", (e) => {
			console.log(e);
			res.statusCode = 500;
			res.setHeader("Content-Type", "text/html");
			res.end("<h1>Internal Server Error</h1>");
		});

		apiReq.end();
	} else if (req.url == "/women") {
		const options = {
			hostname: "fakestoreapi.com",
			path: "/users",
			method: "GET",
		};

		const apiReq = http.request(options, (apiRes) => {
			let data = "";
			apiRes.on("data", (chunk) => {
				data += chunk;
			});

			apiRes.on("end", () => {
				res.statusCode = 200;
				res.setHeader("Content-Type", "application/json");
				res.end(data);
			});
		});

		apiReq.on("error", (e) => {
			console.log(e);
			res.statusCode = 500;
			res.setHeader("Content-Type", "text/html");
			res.end("<h1>Internal Server Error</h1>");
		});

		apiReq.end();
	} else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/html");
		res.end("<h1>Page Not Found</h1>");
	}
});

server.listen(PORT, () => console.log(`Server is running on ${hostname}:${PORT}`));
