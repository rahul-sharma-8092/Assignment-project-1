class Employee {
	constructor(nam, pos, sal) {
		this.name = nam;
		this.position = pos;
		this.salary = sal;
	}

	getSalary() {
		console.log("Salary: ", this.salary);
	}
}

const employee1 = new Employee("Jay Babu", "Software Developer", 80000);
employee1.getSalary();
