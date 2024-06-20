function initProductPageSlider() {
  const SLIDER_CONTAINER_SELECTOR = '.product__slider-container';
  const sliderEl = document.querySelector(SLIDER_CONTAINER_SELECTOR);

  if (sliderEl) {
    // eslint-disable-next-line
    const slider = new Swiper(SLIDER_CONTAINER_SELECTOR, {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 50,
      freeMode: true,
      resistanceRatio: 0,
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.product__slider-button--next',
        prevEl: '.product__slider-button--back',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

export {initProductPageSlider};
