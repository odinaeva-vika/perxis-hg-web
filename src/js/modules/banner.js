document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".js-swiperBanner", {
    cssMode: true,
    navigation: {
      nextEl: ".banner__button-next",
      prevEl: ".banner__button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
});
