// Greeting Promises...
function greetingWithNames(name) {
	return new Promise((resolve, reject) => {
		if (typeof name === "string" && name.trim().length > 0) {
			resolve(`Hello ${name.trim()}!`);
		} else {
			reject(new Error("Invalid Input Name."));
		}
	});
}

// Function calling...
greetingWithNames("Rahul Sharma   ")
	.then((resolve) => console.log(resolve))
	.catch((error) => console.error(error));
