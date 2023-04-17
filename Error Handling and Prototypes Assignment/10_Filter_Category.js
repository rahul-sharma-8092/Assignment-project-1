// 10. Filter by Category
let products = [
	{ name: "Shirts", category: "Clothing" },
	{ name: "Pants", category: "Clothing" },
	{ name: "Hats", category: "Accessories" },
	{ name: "Sunglasses", category: "Accessories" },
	{ name: "Shoes", category: "Footwear" },
	{ name: "Headphones", category: "Electronics" },
	{ name: "Watch", category: "Accessories" },
];

function filterByCategory(products) {
	return function (category) {
		return products.filter((product) => {
			return product.category == category;
		});
	};
}

let productsCategory = filterByCategory(products);
console.log(productsCategory("Clothing")); // Clothing Category

// console.log(productsCategory("Accessories")); // Clothing Accessories
