var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper(".swiper-container2", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    200: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  cssMode: false,
  slideToClickedSlide: false,
});

var swiper = new Swiper(".swiper-container3", {
  slidesPerView: 4,
  breakpoints: {
    1320: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3.5,
    },
    1100: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 2.5,
    },
    901: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },

    500: {
      slidesPerView: 1.8,
    },

    400: {
      slidesPerView: 1.4,
    },

    100: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-Discount",
    prevEl: ".swiper-button-prev-Discount",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  cssMode: false,
  loop: true,
  freemode: true,
  slideToClieckedSlide: false,
});

var swiper = new Swiper(".swiper-container4", {
  slidesPerView: "auto",
  //   breakpoints:{
  //   1320:{
  //     slidesPerView:4,
  //   },
  //    },
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-DiscountPlus",
    prevEl: ".swiper-button-prev-DiscountPlus",
  },
  //   autoplay :{
  //     delay:3000,
  //     disableOnInteraction: false,
  //   },
  cssMode: false,
  //   loop: true,
  slideToClieckedSlide: false,
});

var swiper = new Swiper(".swiper-container4A", {
  slidesPerView: "auto",
  //   breakpoints:{
  //   1320:{
  //     slidesPerView:4,
  //   },
  //    },
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-DiscountPlusA",
    prevEl: ".swiper-button-prev-DiscountPlusA",
  },
  //   autoplay :{
  //     delay:3000,
  //     disableOnInteraction: false,
  //   },
  cssMode: false,
  //   loop: true,
  slideToClieckedSlide: false,
});

var swiper = new Swiper(".swiper-container4B", {
  slidesPerView: "auto",
  //   breakpoints:{
  //   1320:{
  //     slidesPerView:4,
  //   },
  //    },
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next-DiscountPlusB",
    prevEl: ".swiper-button-prev-DiscountPlusB",
  },
  //   autoplay :{
  //     delay:3000,
  //     disableOnInteraction: false,
  //   },
  cssMode: false,
  //   loop: true,
  slideToClieckedSlide: false,
});

var swiper = new Swiper(".swiper-container-Special", {
  slidesPerView: "auto",
  spaceBetween: 0,
  slideToClickedSlide: false,
  freeMode: true, // فعال‌سازی حالت آزادانه کشیدن
});

const options = document.querySelectorAll(
  ".Options-Classes-Selecting .Class-Name-Select",
);

// انتخاب اولین گزینه به عنوان پیش‌فرض
if (options.length > 0) {
  options[0].classList.add("selected");
}
