const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const container = document.getElementById("container");

// response

const Poster = document.getElementById("Poster");
const Title = document.getElementById("Title");
const Year = document.getElementById("Year");
const Actors = document.getElementById("Actors");
const Director = document.getElementById("Director");
const Plot = document.getElementById("Plot");
const BoxOffice = document.getElementById("BoxOffice");
const imdbRating = document.getElementById("imdbRating");
const Awards = document.getElementById("Awards");
const Language = document.getElementById("Language");
const Country = document.getElementById("Country");
const errorMsg = document.getElementById("error-msg");

searchBtn.addEventListener("click", async () => {
	const searchValue = search.value;

	const movie = await getMovie(searchValue);
	// console.log(movie);

	if (movie.Error) {
		container.style.display = "none";
		if (movie.Error == "Incorrect IMDb ID.") {
			errorMsg.innerText = "Please type movie name properly";
			return;
		}
		errorMsg.innerText = movie.Error;
		return;
	} else {
		errorMsg.innerText = "";
		container.style.display = "flex";
	}

	// response
	Poster.src = movie.Poster;
	Title.innerText = movie.Title;
	Year.innerText = movie.Year;
	Actors.innerText = movie.Actors;
	Director.innerText = movie.Director;
	Plot.innerText = movie.Plot;
	BoxOffice.innerText = movie.BoxOffice;
	imdbRating.innerText = movie.imdbRating;
	Awards.innerText = movie.Awards;
	Language.innerText = movie.Language;
	Country.innerText = movie.Country;

	search.value = "";
});

const getMovie = async (title) => {
	const apikey = "863f9ea3";

	const url = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

	const response = await fetch(url);
	const movies = await response.json();
	return movies;
};
