// 9. Check the presence using closures

const myArray = [1, 2, 3, 4, 5];

function numberChecker(arr) {
	return function checkNum(a) {
		return arr.includes(a);
	};
}

const numCheck = numberChecker(myArray);
console.log(numCheck(3));
console.log(numCheck(6));
