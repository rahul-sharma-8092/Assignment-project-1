//  Using Static Method to Add Two Numbers with Calculator Class...
class Calculator {
	static add(num1, num2) {
		return num1 + num2;
	}
}

const mycalc = new Calculator();
const result = Calculator.add(100, 500); // Expected Output 100 + 500 = 600;
console.log("Result:", result);
