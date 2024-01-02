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
  // 변수 선언
  const $gnb = $("#gnb");
  const $gnbDepth1 = $gnb.find(".depth1 > li");
  // gnb
  $gnbDepth1.on("mouseenter", function () {
    $(this).find(".depth2").stop().slideDown(300);
    $(this).find(".depth2").css("background-color", "#ddd");
    // $(this).find(".depth2").stop().slideToggle(300);
    // key 값이 2개 이상일 때는 {}로 묶어서 처리
    // {key1 : value1, key2 : value2}
    $(this).children("a").css({
      "background-color": "#333",
      color: "#fff",
    });
    // key 값이 1개 일때는 {} 생략 가능
    // key, value(아래는 예시)
    // $(this).chlidren("a".css("background-color", "#333"));
    //
  });

  $gnbDepth1.on("mouseleave", function () {
    $(this).find(".depth2").stop().slideUp(300);
    $(this).children("a").css({
      backgroundColor: "#fff",
      color: "#333",
    });
  });
  // CSS 표기법으로 쓴다면 따옴표 필요

  // modal
  const $modal = $("#modal");
  // 모달창 열기
  // .list-bbs li:first=child 클릭했을 때
  $(".list-bbs li:first-child").on("click", function () {
    // modal 열기
    // #modal 보이게
    $modal.show();
  });
  // 모달창 닫기
  // #modal .btn-close를 클릭했을 때
  // $("#modal .btn-close")
  $modal.find(".btn-close").on("click", function () {
    // #modal 닫기
    $modal.hide();
  });

  // tabs
  $tabs = $("#tabs");
  $secG = $(".sec-g");
  // 기본세팅
  // #tabs .sec-g 에 있는 .active를 찾아서 삭제
  // $tabs.find(".sec-g")
  // 선택자 연달아 사용하는 법 $tabs.add($secG)
  $tabs.add($secG).removeClass("active");
  // .sec-g:first-child active 시키기
  $(".sec-g:first-child").addClass("active");
  // #tabs. sec-tit를 클릭했을 때
  $tabs.find(".sec-tit").on("click", function () {
    // 기존에 있던 active 클래스 삭제
    $tabs.add($secG).removeClass("active");
    // this(액션을 취한 아이)의 부모 class에게 active 추가하기
    $(this).parent().addClass("active");
  });

  // slide
  // 변수 선언
  let now = 0;
  const $slide = $(".list-slide");
  // jquery를 사용할 변수 앞에는 $표시하기
  const slideCount = $(".list-slide li").length;
  // js를 사용할 변수 앞에는 $표시 안 씀

  // 3초마다 슬라이드 이동
  // setInterval(함수, 시간)
  setInterval(function () {
    // now가 1씩 증가하는 연산
    // now 재할당
    // now += 1;
    // 나머지 연산자 사용해서 슬라이드 반복해줌
    // 나누어줄 때는 슬라이드의 개수로 나눠주기
    now = (now + 1) % slideCount;
    updateSlidePosition();
  }, 3000);

  function updateSlidePosition() {
    // .slide .list-slide의 left 값 이동
    $slide.css({ left: -100 * now + "%" });
    // left 값: 0, -100%, -200%, 0
    // now 값 : 0, 1, 2, 0
  }
});
