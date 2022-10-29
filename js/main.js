//  HEADER SLIDER
var swiper = new Swiper(".headerSwiper", {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    breakpoints: {
        350: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// MARKETING SLIDER
var swiper = new Swiper(".mrslider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    speed: 1000,
});