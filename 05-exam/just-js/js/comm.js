// const swiper = new Swiper(".slide-intro", {
//   // const는 변수 명이기 때문에 중복사용이 안됨.
//   // 대신 var 변수 명은 중복사용 가능.
//   // Optional parameters
//   //   direction: "vertical",
//   loop: true,
//   // slidesPerView: 3,
//   // spaceBetween: 30,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });

// $(document).ready(function()){
// // html 페이지를 로드한 후 실행(위 문구)
// }

$(function () {
  // html페이지를 로드한 후 실행 (위 명령어)

  // gnb
  $("#gnb .depth1 > li").on("mouseenter", function () {
    // $(this).find(".depth2").stop().slideDown(300);
    $(this).find(".depth2").css("background-color", "#ddd");
    $(this).find(".depth2").stop().slideToggle(300);
  });

  // modal
  // 모달창 열기
  // .list-bbs li:first=child 클릭했을 때
  $(".list-bbs li:first-child").on("click", function () {
    // modal 열기
    // #modal 보이게
    $("#modal").show();
  });
  // 모달창 닫기
  // #modal .btn-close를 클릭했을 때
  $(".btn-close").on("click", function () {
    // #modal 닫기
    $("#modal").hide();
  });

  // tabs
  // 기본세팅
  // #tabs .sec-g 에 있는 .active를 찾아서 삭제
  $("#tabs .sec-g").removeClass("active");
  // .sec-g:first-child active 시키기
  $(".sec-g:first-child").addClass("active");
  // #tabs. sec-tit를 클릭했을 때
  $("#tabs .sec-tit").on("click", function () {
    // 기존에 있던 active 클래스 삭제
    $("#tabs .sec-g").removeClass("active");
    // this(액션을 취한 아이)의 부모 class에게 active 추가하기
    $(this).parent().addClass("active");
  });
});
