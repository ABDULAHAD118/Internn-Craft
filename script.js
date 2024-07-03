
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


(function (d) {
    'use strict';
    var c = 5, st, stop = 8,
        cnt = d.querySelector('.menu-card'),
        dvs = cnt.querySelectorAll('div'),
        but1 = d.querySelector('.show');
    but1.addEventListener('click', function () { showmore(c) }, false);
    function showmore(c) {
        if (c < stop) {
            c++;
            dvs[c].classList.remove('hide');
            st = setTimeout(
                function () {
                    showmore(c);
                }, 500);
        }
        else {
            clearTimeout(st);
            stop = 11;

            if (c === stop) {
                clearTimeout(st);
                stop = 9;
                but1.classList.add('hide');
                but2.classList.remove('hide');
            }
        }
    }

}(document));

let show = document.getElementById('show');
let elements = document.getElementsByClassName('d-flex');
let requiredElement = elements[0];
let content = document.getElementsByClassName('content');
let requiredcontent = content[0];
let footer = document.querySelector('.footer div:nth-child(2)');

function updateElementClass() {
    if (screen.width < 992) {
        requiredElement.classList.remove('d-flex');
        show.addEventListener("click", () => requiredElement.classList.toggle('d-block'));
    } else {
        requiredElement.classList.remove('d-block');
        requiredElement.classList.add('d-flex');
    }

    if (screen.width < 854) {
        requiredcontent.classList.add('flex-column');

    }
    else {
        requiredcontent.classList.remove('flex-column');

    }
    if (screen.width < 782) {
        footer.classList.remove('mt-5');
        footer.classList.add('mt-3');
    }
    else {
        footer.classList.add('mt-5');
        footer.classList.remove('mt-3');

    }
}

// Initial setup
updateElementClass();

// Update classes when window is resized
window.addEventListener('resize', updateElementClass);