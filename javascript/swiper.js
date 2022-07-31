//Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

// index-page-product-card

var swiper = new Swiper(".index-page-product", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".clinet_brand", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 800,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// Product page

var swiper = new Swiper(".product_img", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
