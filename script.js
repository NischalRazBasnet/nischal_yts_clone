const resDiv = document.querySelector(".movies_box");

function getMovies() {
  fetch("https://yts.mx/api/v2/list_movies.json")
  .then((res) => res.json())
  .then((movieData) => {
    let movies = movieData.data.movies;
    const htmlArray = showMovies(movies);
    resDiv.innerHTML = htmlArray.join("");
  })
  .catch((error) => showError(error));
}
getMovies();


function showMovies(movies) {
  return movies.map(
    (movie) => `
    <div class="movie_cards">
          <img src="${movie.medium_cover_image}"/>
          <div class="movie_detail">
            <i class="fa-solid fa-star"></i>
            <p calss="rating">${movie.rating}/10</p>
            <p class="category">${movie.genres.join(",")}</p>
            <a href="#" class="btn_view">View Details</a>
          </div>
        </div>`
  );
}
console.log(resDiv);

function showError(error){
    console.error('Error:',error);
}