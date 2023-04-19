// Some Books name...
const books = [
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1925,
	},
	{
		title: "To Kill a mockingbird",
		author: "Harper Lee",
		year: 1960,
	},
	{
		title: "Who are You?",
		author: "George Orwell",
		year: 1949,
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		year: 1813,
	},
];

// Function declaration...
function extractTitle(book, callback) {
	const titles = book.map((book) => book.title);
	callback(titles);
}

// Callback function declaration...
function sortTitles(titles) {
	console.log("Book's title:", titles.sort());
}

// Function Calling...
extractTitle(books, sortTitles);
