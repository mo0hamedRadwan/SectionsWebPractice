// Testimonials 1 Script (Initialize Swiper)
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    // },
});

// Card 5 Script
const card_5 = document.querySelector(".card-5");
const toggle = card_5.querySelector(".toggle");

toggle.onclick = () => {
    console.log("hi")
    card_5.classList.toggle("light");
}

// Card 9 Script
VanillaTilt.init(document.querySelectorAll(".card-9 .card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});