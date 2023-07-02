const fs = require("fs");

const advantageOfNodeJs =
	" Advantage:--->> Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking 1/0 operation improve the scalability and performance ofweb applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads,consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexiblewith multiple frameworks and makes the development process easier.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking 1/0 operation improve the scalability and performance of web applications builton other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memoryand resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";

fs.appendFile("../nodejs_architecture.txt", advantageOfNodeJs, "utf8", (err) => {
	if (err) {
		console.log("Error in Apprnding Info: ", err);
		return err;
	} else {
		console.log("Info Appending File Successfully");
	}
});

fs.readFile("../nodejs_architecture.txt", "utf8", (err, data) => {
	if (err) {
		console.log("Error in reading File: ", err);
		return err;
	} else {
		console.log("Reading Successfully");
		console.log("Data:---->>", data);
	}
});
