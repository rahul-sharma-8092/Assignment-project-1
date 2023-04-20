// Calling function before it's declaration...
console.log(multiplyNumbers(15, 5));

// Function Declaration...
const multiplyNumbers = function (num1, num2) {
	let result = num1 * num2;
	return result;
};
