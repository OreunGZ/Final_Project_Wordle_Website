// console.log("Hello World!!!");
let currentSlide = 1;
showSlide(currentSlide)

function changeSlide(direction) {
    currentSlide = currentSlide + direction;
    showSlide(currentSlide);
}

function goToSlide(number) {
    currentSlide = number;
    showSlide(currentSlide);
}

function showSlide(number) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
   
    if (number > slides.length) {
        currentSlide = 1;
    }
    
    if (number < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currentSlide-1].style.display = "block";
    dots[currentSlide -1].className += " active";
}
