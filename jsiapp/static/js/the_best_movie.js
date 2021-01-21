const URL_BEST_MOVIES = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

async function fetchMovies(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function fetchMovieDetail(url) {
  try {
    resp = await fetch(url);
    return await resp.text();
  } catch (error) {
    console.log(error);
  }
}


async function getTheBestMovie() {
  /*
  * asynchronous function to get the best movie
  */
  try {
    //Fetching the best movie in the MovieList
    let json = await fetchMovies(URL_BEST_MOVIES);
    let result = json['results'][0];
    //Fetching the best movie in the Movie Title Detail
    return await fetchMovieDetail(json['results'][0]['url']);
  } catch (error) {
    console.log(error);
  }
}

async function renderTheBestMovie() {
  /*
  * asynchronous function to render the best movie into the html page
  */
  let theBestMovie = JSON.parse(await getTheBestMovie());
  //HTML rendering
  let html = '';
  let htmlSegment = `<h2>Meilleur Film</h2>
                      <div class="best-movie">
                        <h3>${theBestMovie.title}</h3>
                        <div class="movie-url">${theBestMovie.url}</div>
                        <img src="${theBestMovie.image_url}" alt="${theBestMovie.title}" >
                     </div>`;
  html += htmlSegment;
  //Binding the html to the_best_movie div
  let the_best_movie = document.querySelector('#the_best_movie');
  the_best_movie.innerHTML = html;
}

renderTheBestMovie();
