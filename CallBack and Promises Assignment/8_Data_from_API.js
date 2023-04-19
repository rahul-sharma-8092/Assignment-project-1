// Get Data from API and Display it on the browser console...
fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
