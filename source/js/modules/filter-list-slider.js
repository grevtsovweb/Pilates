function blurActiveFilterItem() {
  const activeFilter = document.querySelector('.filter-list__link--active');

  if (activeFilter) {
    activeFilter.removeAttribute('href');
  }
}

function initFilterListSlider() {
  const FILTER_CONTAINER_SELECTOR = '.filter-list.swiper-container';
  const filterEl = document.querySelector(FILTER_CONTAINER_SELECTOR);

  if (filterEl) {
    // eslint-disable-next-line
    const filterSlider = new Swiper(FILTER_CONTAINER_SELECTOR, {
      slidesPerView: 'auto',
      freeMode: true,
      resistanceRatio: 0,
    });

    // для пересчета контейнера после загрузки стилей
    window.addEventListener('load', function () {
      filterSlider.update();
    }, false);
  }
}

export {initFilterListSlider, blurActiveFilterItem};
