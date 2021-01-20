const MOVIE_CATEGORIES = [
  {
    'url': "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score",
    'name': "Action"
  },
  {
    'url': "http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score",
    'name': "Adventure"
  },
  {
    'url': "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score",
    'name': "Comedy"
  }
];

async function renderBestMoviesByCategory() {
  let html = '';
  let htmlSegment = '';
  for (category of MOVIE_CATEGORIES) {
    let bestMoviesAwait = await getBestMovies(category['url'], NB_MOVIES_MAX, false);
    //HTML rendering
    htmlSegment += `<h2>Categorie : ${category['name']}</h2>`
    htmlSegment += `<div class="list-movies">`;
    for (bestMovieAwait of bestMoviesAwait) {
      bestMovie = JSON.parse(bestMovieAwait);
      htmlSegment += `<div class="movie">
                        <div class="movie-url">${bestMovie.url}</div>
                        <img src="${bestMovie.image_url}">
                    </div>`;
    }
    htmlSegment += `</div>`;
  }
  html += htmlSegment;
  //Binding the html to the_best_movie div
  let best_movies_by_category = document.querySelector('#best_movies_by_category');
  best_movies_by_category.innerHTML = html;
}

renderBestMoviesByCategory();
