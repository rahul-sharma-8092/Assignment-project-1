class Student {
	constructor(n) {
		this.name = n; // Declaring a name properties inside a object.
	}
}

// Declaring printDetails() to fetch name.
Object.prototype.printDetails = function detailsPrint(obj) {
	console.log(`"Hello, the student is ${this.name}"`);
};

const student = new Student("Mithun");
student.printDetails(); // "Hello, the student is Mithun"
