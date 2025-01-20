let i;
let topSlideIndex = 1;
let middleSlideIndex = 1;

let slides = document.getElementsByClassName("topBannerSlides");
let middleSlides = document.getElementsByClassName("middleBannerSlides");

showTopSlides(topSlideIndex);
showMiddleSlides(middleSlideIndex);



function plusTopSlides(n) {
  showTopSlides(topSlideIndex += n);
}

function loopTopSlides(){
  showTopSlides(topSlideIndex += 1);
  if(topSlideIndex > slides.length){topSlideIndex = 1}
}

function showTopSlides(n) {

  if (n > slides.length) {topSlideIndex = 1}    
  if (n < 1) {topSlideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[topSlideIndex-1].style.display = "block";  
}
setInterval(loopTopSlides, 3000);




function plusMiddleSlides(n) {
  showMiddleSlides(middleSlideIndex += n);
}

function loopMiddleSlides(){
  showMiddleSlides(middleSlideIndex += 1);
  if(middleSlideIndex > middleSlides.length){middleSlideIndex = 1}
}

function showMiddleSlides(n) {

  if (n > middleSlides.length) {middleSlideIndex = 1}    
  if (n < 1) {middleSlideIndex = middleSlides.length}

  for (i = 0; i < middleSlides.length; i++) {
    middleSlides[i].style.display = "none";  
  }

  middleSlides[middleSlideIndex-1].style.display = "block";  
}

setInterval(loopMiddleSlides, 3000);