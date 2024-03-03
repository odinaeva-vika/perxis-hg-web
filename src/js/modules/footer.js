document.addEventListener("DOMContentLoaded", function () {
  const footerBoxes = document.querySelectorAll(".js-footerBox");

  footerBoxes.forEach(function (footerBox) {
    const footerTitle = footerBox.querySelector(".js-footerBtn");
    const menuList = footerBox.querySelector(".js-footerList");

    footerTitle.addEventListener("click", function () {
      footerTitle.classList.toggle("js-footerBtn--active");

      document.querySelectorAll(".js-footerList").forEach(function (list) {
        if (
          list !== menuList &&
          !list.classList.contains("js-menu__list--close")
        ) {
          list.classList.add("js-menu__list--close");
          list.previousElementSibling.classList.remove("js-footerBtn--active");
        }
      });
      menuList.classList.toggle("js-menu__list--close");
    });
  });
});
