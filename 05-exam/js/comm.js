const swiper = new Swiper(".slide-intro", {
  // const는 변수 명이기 때문에 중복사용이 안됨.
  // 대신 var 변수 명은 중복사용 가능.
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  // slidesPerView: 3,
  // spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
