// Hold the input Field
const inputNumber = document.getElementById("input_num");

// Variable for Numbering
var input_value = inputNumber.value;
console.log(input_value);

// Decrement Function
function decrement() {
    input_value = --input_value;
    inputNumber.value = input_value;
}

// Incerment Function
function increment(){
    input_value = ++input_value;
    inputNumber.value = input_value;
}

// Reset Function
function reset(){
    input_value = 0;
    inputNumber.value = input_value;
}
