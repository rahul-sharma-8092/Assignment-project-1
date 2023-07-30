// Modal
var modal = document.querySelector(".model");
var addBlog = document.getElementById("addBlog");
var closeBtn = document.querySelector(".close");

// When the user clicks on the button, open the modal
addBlog.onclick = function () {
	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};

// Form
const form = document.querySelector("form");
const container = document.querySelector(".container");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = {
		posterUrl: event.target.posterUrl.value,
		title: event.target.title.value,
		description: event.target.description.value,
		content: event.target.content.value,
	};
	// Fetch post from localStorage
	const blogPost = JSON.parse(localStorage.getItem("post")) ?? [];
	blogPost.push(formData);
	localStorage.setItem("post", JSON.stringify(blogPost));

	// Display Blog on homepage
	displayBlog();

	event.target.reset();
	modal.style.display = "none";
});

// Display Full content on Blog Page
const displayFullBlog = (i) => {
	const Origin = window.location.origin;
	window.location.replace(`http://127.0.0.1:5500/blog.html?=${i}`);
};

// Display blog on homepage
const displayBlog = () => {
	const blogPost = JSON.parse(localStorage.getItem("post")) ?? [];
	let finalPost = "";
	blogPost.map((post, index) => {
		finalPost += `<div class='blog'>
				<div class="trash" onclick="removePost(${index})"><i class="fa-solid fa-trash"></i></div>
				<img
					class='poster'
					src=${post.posterUrl}
					alt='Blog-Poster'
					eager
				/>
				<h2 class='title'>${post.title}</h2>
				<p class='description'>
					${post.description}
				</p>
				
				<button class="btn" onclick="displayFullBlog(${index})">Read</button>
			</div>`;
	});
	container.innerHTML = finalPost;
};

// Remove Post by Clicking trash button
const removePost = (i) => {
	const blogPost = JSON.parse(localStorage.getItem("post")) ?? [];
	blogPost.splice(i, 1);
	localStorage.setItem("post", JSON.stringify(blogPost));
	displayBlog();
};

displayBlog();
