const URL_BEST_MOVIES = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

/**
* Asynchronous function that fetches a list of movie from an url
* @param {string} url : the url to fecth
* @return : an await response as a JSON object
* */
async function fetchMovies(url) {
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

/**
* Asynchronous function that fetches the movie details 
* @param {string} url : the url to fecth
* @return : an await response as a JSON object
* */
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

  // the best movie title
  let the_best_movie_title = document.querySelector('#the_best_movie_title');
  the_best_movie_title.textContent = theBestMovie.title;

  // the best_movie url
  let the_best_movie_url = document.querySelector('#the_best_movie_url');
  the_best_movie_url.setAttribute('href', theBestMovie.url);

  // the best movie image
  let the_best_movie_img = document.querySelector('#the_best_movie_img');
  the_best_movie_img.setAttribute('src', theBestMovie.image_url);
  the_best_movie_img.setAttribute('alt', theBestMovie.title);

}

renderTheBestMovie();
