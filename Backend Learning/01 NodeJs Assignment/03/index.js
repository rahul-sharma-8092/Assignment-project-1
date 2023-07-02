const fs = require("fs");

fs.readFile("../nodejs_architecture.txt", "utf8", (err, data) => {
	if (err) {
		console.log("Error in reading File: ", err);
		return err;
	} else {
		console.log("Reading Successfully");
		console.log("Data:---->>", data);
	}
});
