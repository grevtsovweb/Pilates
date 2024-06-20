import {initMobileMenu} from './modules/mobile-menu';
import {initSlider} from './modules/cards-slider';
import {initFilterListSlider, blurActiveFilterItem} from './modules/filter-list-slider';
import {initBottomMenu} from './modules/padding-for-main';
import {iosVhFix} from './utils/ios-vh-fix';
import {initFavoriteSlider} from './modules/favorite-slider';
import {initIntroductionSlider} from './modules/introduction-slider';
import {initRecommendSlider} from './modules/recommend-slider';
import {initChangeLikeButton} from './modules/like-btn-change';
import {initformComment} from './modules/comment-form-active';
import {showReplyFormComment} from './modules/comment-form-reply';
import {initProductPageSlider} from './modules/product-page-slider';
import {initAutoResizeTextarea} from './modules/auto-resize-textarea';
import {initModals} from './modules/modals/init-modals';
import {CustomSelect} from './modules/form-validate/custom-select';
import {initFormValidate} from './modules/form-validate/init-form-validate';
import {enterSubmitButton} from './modules/form-validate/enter-submit-button';

// ---------------------------------

window.addEventListener('DOMContentLoaded', function () {

  // Utils
  // ---------------------------------
  iosVhFix();
  // Modules
  // ---------------------------------

  initMobileMenu();
  initBottomMenu();

  initSlider();
  initFilterListSlider();
  initFavoriteSlider();
  initIntroductionSlider();
  initRecommendSlider();
  initProductPageSlider();
});

window.addEventListener('load', () => {
  initModals();
  blurActiveFilterItem();
  initChangeLikeButton();
  initAutoResizeTextarea();
  initformComment();
  showReplyFormComment();

  enterSubmitButton();
  const select = new CustomSelect();
  select.init();
  initFormValidate();
});
