const NB_MOVIES_MAX = 7;

async function getBestMovies(url, nbMoviesMax, shift) {
  /*
  * asynchronous function to get the best movies
  */
  let listOfBestMovies = [];
  let nextUrl = url;
  try {
    let i = 0;
    while (i < nbMoviesMax) {
      //Fetching the best movies in the MovieList
      let json = await fetchMovies(nextUrl);
      let results = json['results'];
      nextUrl = json['next'];
      //Fetching the best movies in the Movie Title Detail
      for (let result of results) {
        if (i < nbMoviesMax) {
          listOfBestMovies.push(await fetchMovieDetail(result['url']));
        }
        i++;
      }
    }
  } catch (error) {
    console.log(error);
  }
  if (shift) { listOfBestMovies.shift(); }
  return listOfBestMovies;
}

async function renderBestMovies() {
  let bestMoviesAwait = await getBestMovies(URL_BEST_MOVIES, NB_MOVIES_MAX + 1, true);
  //constante URL_BEST_MOVIES non définie alors qu'elle l'est dans the_best_movies.js ???
  //let bestMoviesAwait = await getBestMovies("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score", NB_MOVIES_MAX + 1, true);
  //HTML rendering
  let best_movies_container = document.querySelector("#best_movies");
  let balises_a = best_movies_container.querySelectorAll('a');
  let balises_img = best_movies_container.querySelectorAll('img');
  for (let i = 0; i < NB_MOVIES_MAX; i++) {
    let bestMovie = JSON.parse(bestMoviesAwait[i]);
    balises_a[i].setAttribute('href', bestMovie.url);
    balises_img[i].setAttribute('src', bestMovie.image_url);
    balises_img[i].setAttribute('alt', bestMovie.title);
  }
}

renderBestMovies();
