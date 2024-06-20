const likeButton = document.querySelector('[data-like-button]');

function initChangeLikeButton() {
  if (likeButton) {
    likeButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      likeButton.classList.toggle('like-btn--done');
    });
  }
}

export {initChangeLikeButton};
