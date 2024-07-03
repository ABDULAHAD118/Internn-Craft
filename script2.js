document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slider .slide");
    let currentSlide = 0;
    let slideInterval = 2500; // 2.5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === index) ? '1' : '0';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);
});

let show = document.getElementById('show');
let elements = document.getElementsByClassName('d-flex');
let requiredElement = elements[0];

function updateElementClass() {
    if (screen.width < 992) {
        requiredElement.classList.remove('d-flex');
        show.addEventListener("click", () => requiredElement.classList.toggle('d-block'));
    } else {
        requiredElement.classList.remove('d-block');
        requiredElement.classList.add('d-flex');
    }
}

// Initial setup
updateElementClass();

// Update classes when window is resized
window.addEventListener('resize', updateElementClass);