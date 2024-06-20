const formCommentList = document.querySelectorAll('.form-comment');

function initformComment() {
  if (formCommentList.length) {
    for (const item of formCommentList) {
      if (item) {
        const formCommentTextarea = item.querySelector('textarea');
        const formCommentButton = item.querySelector('button');
        formCommentTextarea.addEventListener('focus', () => {
          if (!item.classList.contains('is-active')) {
            item.classList.add('is-active');
          }
        });
        formCommentTextarea.addEventListener('blur', () => {
          if (formCommentTextarea.value === '' && item.classList.contains('is-active')) {
            item.classList.remove('is-active');
          }
        });
        item.oninput = function () {
          if (formCommentTextarea.value !== '') {
            formCommentButton.removeAttribute('disabled');
          }
          if (formCommentTextarea.value === '') {
            formCommentButton.setAttribute('disabled', '');
          }
        };
      }
    }
  }
}

export {initformComment};
