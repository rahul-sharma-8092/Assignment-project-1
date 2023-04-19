// Declaring Array...
let myArray = [5, 10, 15, 20, 25, 30];
console.log("Input Array:", myArray);

// Function Declaration...
function arrayDouble(arr, callback) {
	let arrDouble = [];
	arr.map((e) => {
		arrDouble.push(callback(e));
	});
	return arrDouble;
}

// Callback function declaration...
const DoubleArr = (ele) => {
	return ele * 2;
};

const DoubledArray = arrayDouble(myArray, DoubleArr);
console.log("Doubled Array:", DoubledArray);
