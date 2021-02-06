
let modal = null;
let modal_img = null;
let modal_title = null;
let modal_genres = null;
let modal_date_published = null;
let modal_rated = null;
let modal_imdb_score = null;
let modal_directors = null;
let modal_actors = null;
let modal_duration = null;
let modal_countries = null;
let modal_worldwide_gross_income = null;
let modal_long_description = null;
let url = null;

const closeModal = function(e) {
  modal.style.display = "none";
  modal_genres.textContent = "";
  modal_directors.textContent = "";
  modal_actors.textContent = "";
  modal_countries.textContent = "";
}

const openModal = async function (e) {
  e.preventDefault();

  if (e.target.tagName == "IMG") {
    url = e.target.parentElement.getAttribute('href');
  } else {
    url = document.querySelector('#the_best_movie_url').getAttribute('href');
  }

  let theMovie = JSON.parse(await fetchMovieDetail(url));

  modal = document.getElementById("myModal");

  // L'image de la pochette du film
  modal_img = document.getElementById("myModal_img");
  modal_img.setAttribute('src', theMovie.image_url);
  // Titre du film
  modal_title = document.getElementById("myModal_title");
  modal_title.textContent = theMovie.title;
  // Le genre complet du film
  modal_genres = document.getElementById("myModal_genres");
  for (let genre of theMovie.genres) {
    modal_genres.textContent = modal_genres.textContent + ' , ' + genre;
  }
  modal_genres.textContent = modal_genres.textContent.substr(3);
  // Sa date de sortie
  modal_date_published = document.getElementById("myModal_date_published");
  modal_date_published.textContent = theMovie.date_publisged;
  // Son Rated
  modal_rated = document.getElementById("myModal_rated");
  modal_rated.textContent = theMovie.rated;
  // Son score Imdb
  modal_imdb_score = document.getElementById("myModal_imdb_score");
  modal_imdb_score.textContent = theMovie.imdb_score;
  // Son réalisateur
  modal_directors = document.getElementById("myModal_directors");
  for (let director of theMovie.directors) {
    modal_directors.textContent = modal_directors.textContent + ' , ' + director;
  }
  modal_directors.textContent = modal_directors.textContent.substr(3);
  // La liste des acteurs
  modal_actors = document.getElementById("myModal_actors");
  for (let actor of theMovie.actors) {
    modal_actors.textContent = modal_actors.textContent + ' , ' + actor;
  }
  modal_actors.textContent = modal_actors.textContent.substr(3);
  // Sa durée
  modal_duration = document.getElementById("myModal_duration");
  modal_duration.textContent = theMovie.duration;
  // Le pays d’origine
  modal_countries = document.getElementById("myModal_countries");
  for (let country of theMovie.countries) {
    modal_countries.textContent = modal_countries.textContent + ' , ' + country;
  }
  modal_countries.textContent = modal_countries.textContent.substr(3);
  // Le résultat au Box Office
  modal_worldwide_gross_income = document.getElementById("myModal_worldwide_gross_income");
  if (theMovie.worldwide_gross_income != null) {
    modal_worldwide_gross_income.textContent = theMovie.worldwide_gross_income;
  } else {
    modal_worldwide_gross_income.textContent = "Non publié";
  }
  // Le résumé du film
  modal_long_description = document.getElementById("myModal_long_description");
  modal_long_description.textContent = theMovie.long_description;

  var span = document.getElementsByClassName("close")[0];
  span.addEventListener('click', closeModal);
  modal.style.display = "block";

};


document.querySelectorAll('.js-modal').forEach(a => {
  a.addEventListener('click', openModal);
});

let play_button = document.querySelector('#the_best_movie_play_button');
play_button.addEventListener('click', openModal);

window.onclick = function(e) {
    if (e.target == modal) {
      //modal.style.display = "none";
      closeModal(e);
    }
}
