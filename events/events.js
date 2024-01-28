// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }





let currentSlideIndex = 1;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(currentSlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(currentSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n) {
    currentSlideIndex = n;
  } else {
    currentSlideIndex++;
  }

  if (currentSlideIndex > slides.length) {
    currentSlideIndex = 1;
  }

  if (currentSlideIndex < 1) {
    currentSlideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[currentSlideIndex - 1].style.display = "block";
  dots[currentSlideIndex - 1].className += " active";

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
