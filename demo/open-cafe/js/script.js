const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: true,
  effect: "fade",
  speed: 4000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
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

jQuery(window).on("scroll", function (e) {
  if (300 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});




// jQuery("#js-drawer-button").on("click", function (e) {
//   e.preventDefault();

//   // メニューとボタンのクラス切り替え
//   jQuery("#js-drawer-button").toggleClass("is-checked");
//   jQuery("#js-drawer__content").toggleClass("is-checked");

//   // オーバーレイのクラス切り替え
//   jQuery("#drawer-overlay").toggleClass("is-checked"); // 背景を暗くする
// });




// ハンバーガーメニューのボタンクリック
jQuery("#js-drawer-button").on("click", function (e) {
  e.preventDefault();

  // メニューとボタンのクラス切り替え
  jQuery("#js-drawer-button").toggleClass("is-checked");
  jQuery("#js-drawer__content").toggleClass("is-checked");

  // オーバーレイのクラス切り替え
  jQuery("#drawer-overlay").toggleClass("is-checked"); // 背景を暗くする
});

// 背景（オーバーレイ）がクリックされたときにメニューを閉じる
jQuery("#drawer-overlay").on("click", function () {
  jQuery("#js-drawer-button").removeClass("is-checked"); // ボタンのクラスを外す
  jQuery("#js-drawer__content").removeClass("is-checked"); // メニューのクラスを外す
  jQuery("#drawer-overlay").removeClass("is-checked"); // オーバーレイのクラスを外す
});
