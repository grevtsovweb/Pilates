function initSlider() {
  const SLIDER_CONTAINER_SELECTOR = '.cards-slider__swiper-container';
  const sliderEl = document.querySelector(SLIDER_CONTAINER_SELECTOR);

  if (sliderEl) {
    // eslint-disable-next-line
    const slider = new Swiper(SLIDER_CONTAINER_SELECTOR, {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true,
      resistanceRatio: 0,

      breakpoints: {
        320: {
          slidesPerView: 2.14,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 13,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.cards-slider__button--next',
        prevEl: '.cards-slider__button--back',
      },
    });
  }
}

export {initSlider};
