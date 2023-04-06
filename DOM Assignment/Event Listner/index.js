
const one = document.getElementById('one');

const two = document.getElementById('two');

const three = document.getElementById('three');

const four = document.getElementById('four');

const five = document.getElementById('five');

one.addEventListener("click", () => alert("Hello from Onclick"));

two.addEventListener("dblclick", () => alert("Hello from Double Click"));

three.addEventListener("mouseover", () => {alert("Mouse Over working properly");
    three.innerText="It's working";
    three.style.backgroundColor="red"});

four.addEventListener("mouseout", () => {alert("Mouse Out working properly");
    four.innerText="It's working";
    four.style.backgroundColor="blue"});

five.addEventListener("keypress", () => {
    five.style.color="red";
    alert("Keypress is working.")
});
