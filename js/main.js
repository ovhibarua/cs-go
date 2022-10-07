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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});