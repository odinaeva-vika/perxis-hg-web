document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const bannerSwiper = document.querySelector(".banner__swiper");
  let lastScrollTop = 0;

  const headerHeight = header.offsetHeight;

  const bannerSwiperHeight = bannerSwiper.offsetHeight;

  bannerSwiper.style.height = `${bannerSwiperHeight - headerHeight}px`;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > lastScrollTop) {
      header.classList.remove("header--fixed");
      bannerSwiper.style.marginTop = null;
    } else {
      header.classList.add("header--fixed");
      bannerSwiper.style.marginTop = `${headerHeight}px`;
    }

    if (scrollDistance === 0) {
      header.classList.remove("header--fixed");
      bannerSwiper.style.marginTop = null;
    }

    lastScrollTop = scrollDistance;
  });
});
