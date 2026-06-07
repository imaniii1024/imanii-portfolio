//ハンバーガーメニュー
const menuTrigger = document.querySelector(".menu-trigger");
const drawerContent = document.getElementById("js-drawer-content");

if (menuTrigger && drawerContent) {
  menuTrigger.addEventListener("click", function () {
    menuTrigger.classList.toggle("active");
    drawerContent.classList.toggle("is-checked");
    document.body.style.overflow = drawerContent.classList.contains("is-checked")
      ? "hidden"
      : "";
  });

  drawerContent.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuTrigger.classList.remove("active");
      drawerContent.classList.remove("is-checked");
      document.body.style.overflow = "";
    });
  });
}

//headerメニュー（スクロール）
window.addEventListener("scroll", () => {
  const header = document.querySelector(".l-header");
  if (window.scrollY > 50) {
    // スクロール量が50px超えたら
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//フッター年号自動更新
(function () {
  var y = new Date().getFullYear();
  var el = document.getElementById("copy-year");
  if (el) el.textContent = y;
})();

//スクロール時フワッと表示
const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});

// Formspree用お問い合わせフォーム
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const endpoint = contactForm.getAttribute("action");
    const status = document.getElementById("contact-form-status");
    const submitButton = contactForm.querySelector("[data-fs-submit-btn]");

    if (!endpoint || endpoint.includes("REPLACE_WITH_FORMSPREE_ID")) {
      if (status) {
        status.textContent =
          "フォーム送信先が未設定です。FormspreeのフォームIDを設定してください。";
        status.className = "contact-page__status is-error";
      }
      return;
    }

    if (status) {
      status.textContent = "送信しています...";
      status.className = "contact-page__status";
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "送信中...";
    }

    fetch(endpoint, {
      method: "POST",
      body: new FormData(contactForm),
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("送信に失敗しました");
        }

        contactForm.reset();
        if (status) {
          status.textContent =
            "送信ありがとうございました。内容を確認してご連絡いたします。";
          status.className = "contact-page__status is-success";
        }
      })
      .catch(function () {
        if (status) {
          status.textContent =
            "送信できませんでした。時間をおいてもう一度お試しください。";
          status.className = "contact-page__status is-error";
        }
      })
      .finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "送信";
        }
      });
  });
}

// Works swiper
if (typeof Swiper !== "undefined" && document.querySelector(".swiper")) {
  const swiper = new Swiper(".swiper", {
    effect: "fade",
    loop: true,
    preventClicks: false,
    preventClicksPropagation: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      },
    },
  });
}

function updatePagination(swiper) {
  const slides = document.querySelectorAll(".swiper-slide img");
  const paginationEl = document.querySelector(".swiper-pagination");

  // 現在のアクティブ index
  const activeIndex = swiper.activeIndex;

  // 4つ分だけ表示（例: 2〜5枚目を表示）
  let start = activeIndex - 3;
  if (start < 0) start = 0;
  let end = start + 4;
  if (end > slides.length) {
    end = slides.length;
    start = Math.max(0, end - 4);
  }

  if (!paginationEl) return;

  paginationEl.innerHTML = "";

  for (let i = start; i < end; i++) {
    const bullet = document.createElement("span");
    bullet.classList.add("swiper-pagination-bullet");
    if (i === activeIndex) {
      bullet.classList.add("swiper-pagination-bullet-active");
    }
    bullet.innerHTML = `<img src="${slides[i].getAttribute(
      "src"
    )}" alt="サムネイル">`;
    bullet.addEventListener("click", () => swiper.slideTo(i));
    paginationEl.appendChild(bullet);
  }
}

// var swiperThumbnail = new Swiper(".swiper-pagination", {
//   slidesPerView: 4,
//   spaceBetween: 8,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
