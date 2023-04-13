// Swapping using Array destructring...
function swapping(x, y){
    const arr = [...arguments]

    console.log("Before Swapping: ", arr);

    arr[0] = arr[0] + arr[1];
    arr[1] = arr[0] - arr[1];
    arr[0] = arr[0] - arr[1];

    return arr;
}

const swappedArray = swapping(5, 10);
console.log("After Swapping: ", swappedArray);