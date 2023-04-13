// Swapping using Array destructring...
function swapping(){

    console.log("Before Swapping: ", [...arguments]);

    const [x, y] = [...arguments]; // Swapping Line...

    return [y, x];
}

const swappedArray = swapping(5, 10);
console.log("After Swapping: ", swappedArray);