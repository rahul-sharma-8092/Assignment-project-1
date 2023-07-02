const http = require("http");

const server = http.createServer((req, res) => {
	res.write("<h1>I Am Happy To Learn Full Stack Web Develoment From PW Skills!</h1>");
	res.end();
});

const PORT = 8080;

server.listen(PORT);
console.log(`Server is running on http://localhost:${PORT}`);
