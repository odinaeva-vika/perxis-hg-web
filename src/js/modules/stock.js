document.addEventListener("DOMContentLoaded", function () {
  let swiper = new Swiper(".js-swiperStock", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      520: {
        spaceBetween: 34,
      },
    },
  });
});
