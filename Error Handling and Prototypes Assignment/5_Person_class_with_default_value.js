// Person class with Default Value...
class Person {
	constructor(n = "Unknown", a = 0) {
		this.Name = n;
		this.Age = a;
	}

	getDetails() {
		console.log(`Name: ${this.Name}, Age: ${this.Age}`);
	}
}

const Person1 = new Person("Mithun", 20); // Calling with Parameter;
Person1.getDetails();

const Person2 = new Person(); // Calling without Parameter;
Person2.getDetails();
