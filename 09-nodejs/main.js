// import Swiper JS
import Swiper from "swiper";
import "swiper/swiper.css";

const swiper = new Swiper(".slide-main", {
  direction: "vertical",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
