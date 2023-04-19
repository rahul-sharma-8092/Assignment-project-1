// Multiple Request...
async function fetchdata() {
	try {
		const [todoResponse, postResponse] = await Promise.all([
			fetch("https://jsonplaceholder.typicode.com/todos/1"),
			fetch("https://jsonplaceholder.typicode.com/posts/1"),
		]);
		const [todo, post] = await Promise.all([
			todoResponse.json(),
			postResponse.json(),
		]);

		const combineData = { todo, post };
		console.log(combineData);
	} catch (error) {
		console.log(error);
	}
}

fetchdata();
