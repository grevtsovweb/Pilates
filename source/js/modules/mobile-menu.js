const DESKTOP_WIDTH = 1023;
const mainNavEl = document.querySelector('.main-nav');
const MENU_BUTTON_SELECTOR = '.main-nav__toggle';
const menuBtn = document.querySelector(MENU_BUTTON_SELECTOR);

function openMenu(nav, trigger) {
  nav.classList.add('main-nav--is-open');
  trigger.setAttribute('aria-label', trigger.dataset.close);
  trigger.setAttribute('aria-pressed', 'true');
}

function closeMenu(nav, trigger) {
  nav.classList.remove('main-nav--is-open');
  trigger.setAttribute('aria-label', trigger.dataset.open);
  trigger.setAttribute('aria-pressed', 'false');
}

function onWindowResize() {
  if (window.innerWidth > DESKTOP_WIDTH) {
    closeMenu(mainNavEl, menuBtn);
  }
}

function onWindowScroll() {
  if (window.scrollY > 100) {
    closeMenu(mainNavEl, menuBtn);
  }
}

function initMobileMenu() {
  if (mainNavEl && menuBtn) {
    document.addEventListener('click', function (evt) {
      let target = evt.target;

      if (target.closest(MENU_BUTTON_SELECTOR)) {
        if (mainNavEl.classList.contains('main-nav--is-open')) {
          closeMenu(mainNavEl, menuBtn);
          return;
        }

        openMenu(mainNavEl, menuBtn);
      } else if (mainNavEl.classList.contains('main-nav--is-open')) {
        closeMenu(mainNavEl, menuBtn);
      }
    });

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('scroll', onWindowScroll);
  }
}

export {initMobileMenu};
