// Access Random Elements

// Input Arrays
const myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Declaration of Extract Function
function extractElements(arr) {
    
    const [first, second] = arr.slice(0, 2);

    const last = arr[arr.length - 1];

    return [first, second, last];
}

// Function Calling
console.log(extractElements(myArray));

console.log(extractElements([1, 2, 3, 4, 5]));