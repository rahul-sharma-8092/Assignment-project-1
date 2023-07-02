const fs = require("fs");

fs.unlink("../nodejs_architecture.txt", (err) => {
	if (err) {
		console.log("Error in deleting file: ", err);
		return err;
	} else {
		console.log("Deleting Successfully");
	}
});
