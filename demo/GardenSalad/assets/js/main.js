jQuery(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  jQuery(".parallax-section").each(function () {
    var offsetTop = $(this).offset().top;
    var height = $(this).height();

    // セクションが画面内に入っているときだけ処理
    if (
      scrollTop + windowHeight > offsetTop &&
      scrollTop < offsetTop + height
    ) {
      var distance =
        (scrollTop + windowHeight - offsetTop) / (windowHeight + height);
      var move = (distance - 0.8) * 100; // -20px〜+20pxくらい動く
      jQuery(this)
        .find(".parallax-bg")
        .css("transform", "translateY(" + move + "px)");
    }
  });
});

jQuery(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  const modal = document.getElementById("js-contact-modal");
  modal.showModal();

  // モーダル本体を一番上にスクロール
  modal.scrollTop = 0;

  // モーダル内のスクロールエリアが .contact-modal__body ならこっちも
  modal.querySelector(".contact-modal__body").scrollTop = 0;
});

jQuery(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  jQuery("#js-contact-modal")[0].close();
});

//送信ボタン
jQuery(function ($) {
  $('.js-submit-button').on('click', function () {
    $(this).css('background', '#BDBDBD');
    $(this).prop('disabled', true); // 押せないようにするなら
  });
});


jQuery(function ($) {
  const $topBtn = $(".back-to-top");

  // 最初は非表示にしておく
  $topBtn.hide();

  // スクロールしたらボタンを表示／非表示
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $topBtn.fadeIn();
    } else {
      $topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらページトップにスクロール
  $topBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
