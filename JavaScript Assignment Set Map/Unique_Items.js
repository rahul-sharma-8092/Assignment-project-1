
// Sample array for Inputs
const sampleArr = ["Rahul", "Desh", "Neha", "Rahul", 100, 500, 900, "Desh", 100];


// Declaration of function
function uniqueItem(arr) {
    let uniqueSet = new Set([...arr])
    return uniqueSet
}


const UniqueArrayItem = uniqueItem(sampleArr);
console.log(UniqueArrayItem);