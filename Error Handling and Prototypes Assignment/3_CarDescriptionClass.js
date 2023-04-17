// Car Description Class...
class Car {
	constructor(c, m, y) {
		this.company = c;
		this.model = m;
		this.year = y;
	}

	getDescription() {
		console.log(`This is a ${this.year} ${this.company} ${this.model}.`);
	}
}

const myCar = new Car("Skoda", "Rapid", 2022);
myCar.getDescription(); // Calling getDescription method;
