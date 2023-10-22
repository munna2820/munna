//swiper js
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

//typed js
var typed = new Typed('#element', {
    strings: ['Book appointment', 'Bring your Vehical', 'Get it Repair', 'Ready for Deliver'],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
});

//AOS JS
AOS.init();
  
// CounterUp2
const counterUp = window.counterUp.default;

const callback = (entries) => {
    entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            });
            el.classList.add('is-visible');
        }
    });
};

// Use querySelectorAll to select all elements with the class "counter"
const elements = document.querySelectorAll('.counter');

// Create an IntersectionObserver for each "counter" element
elements.forEach((el) => {
    const IO = new IntersectionObserver(callback, { threshold: 1 });
    IO.observe(el);
});