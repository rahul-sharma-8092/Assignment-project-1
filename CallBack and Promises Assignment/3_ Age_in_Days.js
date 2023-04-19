// Object Declaration...
const Person = {
	firstName: "Niranjan",
	lastName: "Ray",
	age: 21,
};

// Function ageIndays declaration...
function ageInDays(person, callback) {
	const fullName = `${person.firstName} ${person.lastName}`;
	const ageINdays = person.age * 365;
	callback(fullName, ageINdays);
}

// Callback function declaration...
function logResult(fullName, ageINdays) {
	console.log(
		`The person's full name is ${fullName}, and their age in days is ${ageINdays}`
	);
}

// Calling ageInDays function...
ageInDays(Person, logResult);
