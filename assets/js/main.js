AOS.init();

// SwiperSwiper
new Swiper(".swiperSection3", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

//viewerjs
const viewerSection2 = document.querySelector(".viewerSection2");
if (viewerSection2) {
  new Viewer(viewerSection2);
}
