/**
* Adds attribute class="responsive" in order to show a vertical navigation
* on mobile screens
* @param {event} e : the click event on the menu icon
* */
const showMenu = function(e) {
  e.preventDefault();
  let navBar = document.querySelector('nav');
  if (navBar.className == null || navBar.className === "") {
    navBar.className = "responsive";
  } else {
    navBar.className = "";
  }
  let contenuPage = document.querySelector('#contenu_de_page');
  if (contenuPage.className == null || contenuPage.className === "") {
    contenuPage.className = "responsive";
  } else {
    contenuPage.className = "";
  }
}

let menuShow = document.querySelector('#menu_show');
menuShow.addEventListener('click', showMenu);
