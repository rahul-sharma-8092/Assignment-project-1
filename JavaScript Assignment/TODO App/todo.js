function addItem() {
	var input = document.getElementById("input");
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
