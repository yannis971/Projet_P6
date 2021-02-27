let carrouselId = ["#carrousel_0", "#carrousel_1", "#carrousel_2", "#carrousel_3"];
let slideIndexes = [0, 0, 0, 0];
const nbItems = 4;

const showSlides = function(indice_carrousel, position) {
  let carrousel = document.querySelector(carrouselId[indice_carrousel]);
  let slides = carrousel.querySelectorAll('.movie');
  if (position > slides.length - nbItems) {
    position = position - (slides.length / 2);
  }
  if (position < 0) {
    position = (slides.length / 2) - 1;
  }
  slideIndexes[indice_carrousel] = position;
  for (let i = 0; i < slides.length; i++) {
    if (i < position) {
        slides[i].style.display = "none";
    } else if (i < position + nbItems) {
        slides[i].style.display = "block";
    } else {
        slides[i].style.display = "none";
    }
 }
}

const nextSlides = function(e) {
  plusSlides(e, +1);
}

const prevSlides = function(e) {
  plusSlides(e, -1);
}

const plusSlides = function(e, n) {
  e.preventDefault();
  let id = e.target.parentElement.getAttribute('id');
  let i = carrouselId.indexOf('#' + id);
  slideIndexes[i] += n;
  showSlides(i, slideIndexes[i]);
}

for (let i = 0; i < carrouselId.length; i++) {
  showSlides(i, slideIndexes[i]);
}

document.querySelectorAll('.prev').forEach(a => {
  a.addEventListener('click', prevSlides);
});

document.querySelectorAll('.next').forEach(a => {
  a.addEventListener('click', nextSlides);
});
