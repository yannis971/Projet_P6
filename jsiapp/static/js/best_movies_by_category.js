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

  for (let j = 0; j < MOVIE_CATEGORIES.length; j++) {
    let id = "#category_" + j;
    let best_movies_container = document.querySelector(id);
    let balise_h2 = best_movies_container.querySelector('h2');
    let balises_a = best_movies_container.querySelectorAll('a');
    let balises_img = best_movies_container.querySelectorAll('img');

    let cle = MOVIE_CATEGORIES[j];
    balise_h2.textContent = cle['name'];

    let bestMoviesAwait = await getBestMovies(cle['url'], NB_MOVIES_MAX, false);

    for (let i = 0; i < NB_MOVIES_MAX; i++) {
      let bestMovie = JSON.parse(bestMoviesAwait[i]);
      balises_a[i].setAttribute('href', bestMovie.url);
      balises_img[i].setAttribute('src', bestMovie.image_url);
      balises_img[i].setAttribute('alt', bestMovie.title);
    }
  }
}

renderBestMoviesByCategory();
