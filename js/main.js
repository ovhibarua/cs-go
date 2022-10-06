//  HEADER SLIDER
var swiper = new Swiper(".headerSwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});