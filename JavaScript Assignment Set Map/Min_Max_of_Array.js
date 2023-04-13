
// Input Array
const myArray = [5, 2, 7, 1, 9];

// Function Declaration
function minMaxOfArray(arr) {
    
    const min = Math.min(...arr);

    const max = Math.max(...arr);

    // Creating an Object
    const Obj1 = new Object()
    
    Obj1.max = max;
    Obj1.min = min;

    return Obj1;
}

// Function Calling
console.log(minMaxOfArray(myArray));