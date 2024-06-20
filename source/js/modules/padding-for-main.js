const TABLET_WIDTH = 1024;
const main = document.querySelector('main');
const headerMenu = document.querySelector('.header--bottom-menu');

function addMarginToMain() {
  if (window.innerWidth < TABLET_WIDTH) {
    const MENU_HEIGHT = headerMenu.offsetHeight;
    const PADDING_BOTTOM = (MENU_HEIGHT + 30) + 'px';
    main.style.paddingBottom = PADDING_BOTTOM;
  } else {
    main.style.paddingBottom = 0;
  }
}

function initBottomMenu() {
  if (headerMenu) {
    addMarginToMain();
    window.addEventListener('resize', addMarginToMain);
  }
}

export {initBottomMenu};
