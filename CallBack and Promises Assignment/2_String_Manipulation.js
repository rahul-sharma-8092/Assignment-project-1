// Function declaration for String Manipulation
function manipulateString(str, callback) {
	const manipulateStr = str.toUpperCase();

	return callback(manipulateStr);
}

// Callback function declaration
function logString(manipulatedStr) {
	return `The manipulated string is: ${manipulatedStr}`;
}

const ManipulatedString = manipulateString("hello, world!", logString);
console.log(ManipulatedString);
