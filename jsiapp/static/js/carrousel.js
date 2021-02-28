let carrouselId = ["#carrousel_0", "#carrousel_1", "#carrousel_2", "#carrousel_3"];
let slideIndexes = [0, 0, 0, 0];
const NB_SLIDES_TO_SHOW = 4;

/**
* Shows the slides of a carrousel from a predicted position
* @param {number} carrouselIndex : the carrousel index
* @param {number} currentSlideIndex : the slide index from which the function starts to show slides
*/
const showSlides = function(carrouselIndex, currentSlideIndex) {
  let carrousel = document.querySelector(carrouselId[carrouselIndex]);
  let slides = carrousel.querySelectorAll('.movie');
  if (currentSlideIndex > slides.length - NB_SLIDES_TO_SHOW) {
    currentSlideIndex = currentSlideIndex - (slides.length / 2);
  }
  if (currentSlideIndex < 0) {
    currentSlideIndex = (slides.length / 2) - 1;
  }
  slideIndexes[carrouselIndex] = currentSlideIndex;
  for (let i = 0; i < slides.length; i++) {
    if (i < currentSlideIndex) {
        slides[i].style.display = "none";
    } else if (i < currentSlideIndex + NB_SLIDES_TO_SHOW) {
        slides[i].style.display = "block";
    } else {
        slides[i].style.display = "none";
    }
 }
}

/**
Function called to show next slides
* @param {event} e : the event (click on next)
*/
const nextSlides = function(e) {
  plusSlides(e, +1);
}

/**
Function called to show prev slides
* @param {event} e : the event (click on prev)
*/
const prevSlides = function(e) {
  plusSlides(e, -1);
}

/**
* Calculates the current slide of the carrousel then call the showSlides function
* @param {event} e : the event (click on prev or next)
* @param {number} n : the number of slides to move to the current slide of the carrousel
*/
const plusSlides = function(e, n) {
  e.preventDefault();
  let id = e.target.parentElement.getAttribute('id');
  let i = carrouselId.indexOf('#' + id);
  slideIndexes[i] += n;
  showSlides(i, slideIndexes[i]);
}

/**
* Initial loop to show slides
*/

for (let i = 0; i < carrouselId.length; i++) {
  showSlides(i, slideIndexes[i]);
}

/**
forEach loop on every "prev" links to bind click event on prevSlides function
*/
document.querySelectorAll('.prev').forEach(a => {
  a.addEventListener('click', prevSlides);
});

/**
forEach loop on every "next" links to bind click event on nextSlides function
*/
document.querySelectorAll('.next').forEach(a => {
  a.addEventListener('click', nextSlides);
});
