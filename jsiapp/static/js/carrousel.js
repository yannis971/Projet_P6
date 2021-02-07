let slideIndexes = [1, 1, 1, 1];
let carrouselId = ["#carrousel_0", "#carrousel_1", "#carrousel_2", "#carrousel_3"];
const nbItems = 4;

const showSlides = function(slideIndex, i) {
  let carrousel = document.querySelector(carrouselId[i]);
  let slides = carrousel.querySelectorAll('.movie');
  if ((slideIndex + nbItems -1) > slides.length) {
    slideIndexes[i] = 1;
  }
  if (slideIndex < 1) {
    slideIndexes[i] = slides.length;
  }
  let iMin = slideIndexes[i] - 1;
  let iMax = iMin + nbItems;
  for (let i = 0; i < slides.length; i++) {
    if (i >= iMin && i < iMax) {
      slides[i].style.display = "block";
    }
    else {
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
  showSlides(slideIndexes[i], i);
}


for (let i = 0; i < slideIndexes.length; i++) {
  showSlides(slideIndexes[i], i);
}

document.querySelectorAll('.prev').forEach(a => {
  a.addEventListener('click', nextSlides);
});

document.querySelectorAll('.next').forEach(a => {
  a.addEventListener('click', nextSlides);
});
