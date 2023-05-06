
function naviagation() {
    var x = document.getElementById("TopNaviagation");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/* The jquery is for the slide show. If you click on it , the slideshow will go on next slide*/

$(document).ready(function(){
    $("#clickslide").click(function(){
        console.log("NEXT SLIDE MOBILE");
        let slides = document.getElementsByClassName("mySlides");
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
    });
});



/* The JQuery for Popup Images */
