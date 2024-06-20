function initRecommendSlider() {
  const SLIDER_CONTAINER_SELECTOR = '.recommend-slider__slider--js';
  const sliderEl = document.querySelector(SLIDER_CONTAINER_SELECTOR);

  if (sliderEl) {
    // eslint-disable-next-line
    const slider = new Swiper(SLIDER_CONTAINER_SELECTOR, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
      resistanceRatio: 0,

      // Navigation arrows
      navigation: {
        nextEl: '.cards-slider__button--favorites-slider-next',
        prevEl: '.cards-slider__button--favorites-slider-back',
      },
    });
  }
}

export {initRecommendSlider};
