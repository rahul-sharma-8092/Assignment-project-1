// Building Robust Functions in JavaScript...
const getPerson = function (person) {
	try {
		if (
			typeof person == "object" &&
			person.hasOwnProperty("name") &&
			person.hasOwnProperty("age")
		) {
			return `Name: ${person.name}, Age: ${person.age}`;
		}
		throw new Error("Invalid parameter type");
	} catch (err) {
		return err.message;
	}
};

console.log(getPerson({ name: "Rohan", age: 18 })); // Name: Rohan, Age: 18
console.log(getPerson({ name: "Rohan" })); // Invalid parameter type
console.log(getPerson(["name", "Rohan"])); // Invalid parameter type
