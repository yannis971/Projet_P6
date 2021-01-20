const urlListOfMovies = "http://localhost:8000/api/v1/titles/";
const urlBestMovies = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

//const listOfMovies = () => {
  /*
  *
  */
  //console.log("appel function listOfMovies")
//}

// VERSION 1
var best_movie;
const getMovieDetail = (urlDetail) => {
  fetch(urlDetail)
    .then(response => response.text())  // convert to text
    .then(text => {
      let movieDetail = JSON.parse(text);
      console.log("movieDetail = " + movieDetail);
      best_movie = movieDetail;
      console.log("best_movie in getMovieDetail = " + best_movie);
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors

}

const theBestMovie = () => {
  fetch(urlBestMovies)
    // Handle success
    .then(response => response.json())  // convert to json
    //.then(json => console.log(json))    //print data to console
    .then(json => {
      let result = json['results'][0];
      console.log("result[0] = " + result);
      let urlDetail = result['url'];
      console.log("urlDetail = " + urlDetail);
      getMovieDetail(urlDetail);
    })    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
}
//console.log("debug get_data.js")
//theBestMovie();
//console.log("best_movie = " + best_movie);



// VERSION 2
/*
async function theBestMovie() {
  let response = await fetch(urlBestMovies);
  let json = await response.json();
  let result = json['results'][0];
  let urlDetail = result['url'];
  response = await fetch(urlDetail);
  let the_Best_Movie = JSON.parse(await response.text());
  console.log("the_Best_Movie = " + the_Best_Movie);
  console.log(the_Best_Movie.id);
  console.log(the_Best_Movie.url);
  console.log(the_Best_Movie.title);
  return the_Best_Movie;
}

console.log("debug get_data.js")
let best_movie = Promise.resolve(the_Best_Movie);
console.log("best_movie = " + best_movie);
console.log(best_movie.id);
console.log(best_movie.url);
console.log(best_movie.title);
*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

var myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);
console.log("myBook = " + myBook);
