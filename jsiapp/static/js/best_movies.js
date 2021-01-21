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
  let html = '';
  let htmlSegment = `<h2>Films les mieux notés</h2>`;
  htmlSegment += `<div class="list-movies">`;
  for (let bestMovieAwait of bestMoviesAwait) {
    bestMovie = JSON.parse(bestMovieAwait);
    htmlSegment += `<div class="movie"><div class="movie-url">${bestMovie.url}</div>
    <img src="${bestMovie.image_url}"></div>`;
  }
  htmlSegment += `</div>`;
  html += htmlSegment;
  //Binding the html to the_best_movie div
  let best_movies = document.querySelector('#best_movies');
  best_movies.innerHTML = html;
}

renderBestMovies();
