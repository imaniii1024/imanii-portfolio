// document
//   .querySelector("#js-drawer-button")
//   .addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector("#js-drawer-button").classList.toggle("is-checked");
//     document
//       .querySelector("#js-drawer__content")
//       .classList.toggle("is-checked");
//   });

// document
//   .querySelectorAll("#js-drawer__content a[href^='#']")
//   .forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       document
//         .querySelector("#js-drawer-button")
//         .classList.remove("is-checked");
//       document
//         .querySelector("#js-drawer__content")
//         .classList.remove("is-checked");
//     });
//   });

jQuery(document).ready(function () {
  // ドロワーメニューの開閉を設定
  jQuery("#js-drawer-button").on("click", function () {
    jQuery("#js-drawer__content").slideToggle(); // メニューを上から下に表示・非表示
  });
});

// jQuery("#js-drawer-button").on("click", function (e) {
//   e.preventDefault();
//   jQuery("#js-drawer-button").toggleClass("is-checked");
//   jQuery("#js-drawer__content").toggleClass("is-checked");
// });

// $(document).ready(function() {
//   var $scrollContainer = $('.scroll-container');
//   var $scrollContent = $('.scroll-content');

//   function startScrolling() {
//     var scrollWidth = $scrollContent.width();
//     var containerWidth = $scrollContainer.width();

//     $scrollContent.css({ left: containerWidth });

//     $scrollContent.animate({ left: -scrollWidth },
//       {
//         duration: (scrollWidth + containerWidth) * 10, // スクロールの速度を調整
//         easing: 'linear',
//         complete: startScrolling
//       }
//     );
//   };
//   }

// $(".about__slider").slick({
//   arrows: false, //左右の矢印はなし
//   autoplay: true, //自動的に動き出すか。初期値はfalse。
//   autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
//   speed: 3000, //スライドのスピード。初期値は300。
//   infinite: true, //スライドをループさせるかどうか。初期値はtrue。
//   pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
//   pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
//   cssEase: "linear", //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
//   slidesToShow: 8, //スライドを画面に4枚見せる
//   slidesToScroll: 1, //1回のスライドで動かす要素数
//   responsive: [
//     {
//       breakpoint: 769, //モニターの横幅が769px以下の見せ方
//       settings: {
//         slidesToShow: 2, //スライドを画面に2枚見せる
//       },
//     },
//     {
//       breakpoint: 426, //モニターの横幅が426px以下の見せ方
//       settings: {
//         slidesToShow: 4.5, //スライドを画面に1.5枚見せる
//       },
//     },
//   ],
// });

// const swiper = new Swiper(".about__swiper", {});

// window.addEventListener("DOMContentLoaded", () => {
//   const infiniteSlider = new Swiper(".infinite-slider", {
//     loop: true,
//     loopedSlides: 2,
//     slidesPerView: "auto",
//     speed: 8000,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//     },
//   });
// });

// const swiper = new Swiper(".about__swiper-wrapper", {
//   loop: true, // ループ
//   slidesPerView: 3, // 一画面に表示する枚数
//   speed: 6000, // ループの時間
//   allowTouchMove: false, // スワイプ無効
//   autoplay: {
//     delay: 0, // 途切れなくループ
//   },
// });

const swiper = new Swiper(".about__swiper", {
  // Optional parameters
  // direction: "horizontal",
  loop: true,
  loopedSlides: 10,
  speed: 3000,
  // effect: "slide",
  // slidesPerView: 3.5,
  width: 100,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  // swiper.paused: false,
  breakpoints: {
    900: {
      width: 200,
      // slidesPerView: 6.5,
      spaceBetween: 20,
    },
  },

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

jQuery(".prizes__modal").on("click", function (e) {
  e.preventDefault();

  jQuery(this);
});

// --------------------------spots---------------------------

const spotSwiper = new Swiper(".spots__swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  keyboard: true,
  slidesPerView: 1.5273, // 表示スライド枚数
  centeredSlides: true, // アクティブなスライドを中央
  loop: true, // ループ
  breakpoints: {
    900: {
      slidesPerView: 3.35,
      spaceBetween: 32,
      centeredSlides: false,
      initialSlide: 7,
    },
  },

  // If we need pagination
  pagination: {
    el: ".spots__swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".spots__swiper-button-next",
    prevEl: ".spots__swiper-button-prev",
  },
});

// ---------------------accordion---------------------

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

// ---------------------modal-----------------------

jQuery("#js-modal-open-1").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-1")[0].showModal();
});

jQuery(".js-prizes__close").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-1")[0].close();
});

jQuery("#js-modal-open-2").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-2")[0].showModal();
});

jQuery(".js-prizes__close").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-2")[0].close();
});

jQuery("#js-modal-open-3").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-3")[0].showModal();
});

jQuery(".js-prizes__close").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-3")[0].close();
});

jQuery("#js-modal-open-4").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-4")[0].showModal();
});

jQuery(".js-prizes__close").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-4")[0].close();
});

jQuery("#js-modal-open-5").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-5")[0].showModal();
});

jQuery(".js-prizes__close").on("click", function (e) {
  e.preventDefault();

  jQuery("#prizes__modal-5")[0].close();
});

//
// $(".prizes__card").click(function () {
//   // console.log("クリックされました");
//   var src = $(this).attr("src");
//   var cap = $(this).attr("alt");
//   $(".prizes__modal").fadeIn().css("display", "flex");

//   $("#popup").attr("src", src);
//   $(".caption").text(cap);
// });

// var hideModal = function (c) {
//   c.each(function () {
//     jQuery(this).on("click", function () {
//       jQuery(".open-modal").removeClass("open-modal");
//     });
//   });
// };

// // modalを監視
// var modalTrigger = function (c) {
//   c.each(function () {
//     jQuery(this).on("click", function (event) {
//       // data属性でクリックした対象を判定
//       var dataTarget = jQuery(this).data("target");
//       var content = jQuery("#" + dataTarget);

//       // モーダルの親ラッパー
//       jQuery("section[modal_cards]").each(function () {
//         // 挿入するspanタグ
//         console.log(this);
//         if (jQuery(this).data("prizes__modal") === content.data("content")) {
//           var spn = jQuery('<span class="open-modal absolute"></span>');
//           jQuery(this).prepend(spn);
//         }
//       });
//     });
//   });
// };

// jQuery(document).ready(function () {
//   // modalを監視
//   var modalContent = jQuery(".prizes-card__wrap");
//   modalTrigger(modalContent);

//   // modalを閉じる
//   var closeBtn = jQuery(".close-btn");
//   hideModal(closeBtn);
// });
