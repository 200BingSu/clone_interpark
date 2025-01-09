// 이미지가 들어오고 작동됨.
window.addEventListener("load", function () {
  new Swiper(".visual-slide", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".visual-slide .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide .swiper-button-next",
      prevEl: ".slide .swiper-button-prev",
    },
  });
  new Swiper(".tour-slide", {
    slidesPerView: 3,
    spaceBetween: 25,
    // loop: true,
    pagination: {
      el: ".tour-slide .tour-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".content-slide-wrap .swiper-button-next",
      prevEl: ".content-slide-wrap .swiper-button-prev",
    },
  });
});
