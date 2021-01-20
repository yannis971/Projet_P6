const URL_BEST_MOVIES = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
//VERSION 1 QUI FONCTIONNE
/*
async function getTheBestMovie() {
  /*
  * asynchronous function to get the best movie
  */
/*
  //Fetching the best movie in the MovieList
  let response = await fetch(URL_BEST_MOVIES);
  let json = await response.json();
  let result = json['results'][0];

  //Fetching the best movie in the Movie Title Detail
  let urlDetail = result['url'];
  response = await fetch(urlDetail);
  let theBestMovie = JSON.parse(await response.text());

  //HTML rendering
  let html = '';
  let htmlSegment = `<p>div du Meilleur Film</p>
                      <div>
                        <img src="${theBestMovie.image_url}" >
                        <h2>${theBestMovie.title}</h2>
                        <div>${theBestMovie.description}</div>
                    </div>`;

  html += htmlSegment;
  let the_best_movie = document.querySelector('#the_best_movie');
  the_best_movie.innerHTML = html;
}
getTheBestMovie();

*/
//VERSION 2 SEPARATION DU FETCH ET DU HTML RENDERING
async function getTheBestMovie() {
  /*
  * asynchronous function to get the best movie
  */
  try {

    //Fetching the best movie in the MovieList
    let response = await fetch(URL_BEST_MOVIES);
    let json = await response.json();
    let result = json['results'][0];

    //Fetching the best movie in the Movie Title Detail
    let urlDetail = result['url'];
    response = await fetch(urlDetail);
    return await response.text();
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
