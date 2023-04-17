function convertToNumber(str) {
	try {
		let num = Number(str);
		if (isNaN(num)) throw new Error("Invalid number");
		return num;
	} catch (err) {
		return err.message;
	}
}

console.log(convertToNumber("123")); // Output: 123
console.log(convertToNumber("abc")); // Output: Invalid number
