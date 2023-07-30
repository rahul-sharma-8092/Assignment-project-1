const blogHeading = document.getElementById("blog-heading");
const blogDescription = document.getElementById("blog-description");
const blogPoster = document.getElementById("blog-poster");
const blogContent = document.getElementById("blog-content");

// Get Index
const pageHref = window.location.href;
const index = pageHref.charAt(pageHref.length - 1);
// console.log(index);

const blogPost = JSON.parse(localStorage.getItem("post")) ?? [];

blogHeading.innerText = blogPost[index].title;
blogDescription.innerText = blogPost[index].description;
blogPoster.src = blogPost[index].posterUrl;
blogContent.innerText = blogPost[index].content;
