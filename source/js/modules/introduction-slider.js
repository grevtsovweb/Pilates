function initIntroductionSlider() {
  const SLIDER_CONTAINER_SELECTOR = '.introduction-block__slider--js';
  const sliderEl = document.querySelector(SLIDER_CONTAINER_SELECTOR);

  if (sliderEl) {
    // eslint-disable-next-line
    const slider = new Swiper(SLIDER_CONTAINER_SELECTOR, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      // spaceBetween: -100,
      // freeMode: true,
      // cssMode: true,
      resistanceRatio: 0,
      centeredSlides: true,
      loop: true,

      breakpoints: {
 
        320: {
            slidesPerView: 'auto',
            spaceBetween: 0,
            spaceBetween: -6,
        },
        767: {
          // slidesPerView: 1.85,
          // spaceBetween: -64,
          slidesPerView: 'auto',
          spaceBetween: 22,
        },

        1023: {
          // slidesPerView: 1.85,
          // spaceBetween: -64,
          slidesPerView: 'auto',
          spaceBetween: 0,
        }
      },

      // Navigation arrows
      navigation: {
        nextEl: '.cards-slider__button--favorites-slider-next',
        prevEl: '.cards-slider__button--favorites-slider-back',
      },
    });
  }
}

export {initIntroductionSlider};
