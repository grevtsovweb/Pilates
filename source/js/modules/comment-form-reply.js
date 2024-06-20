const commentReplyForms = document.getElementsByClassName('comment__reply');

function showReplyFormComment() {
  if (commentReplyForms.length) {
    for (const item of commentReplyForms) {
      if (item) {
        const commentFormReplyTextarea = item.querySelector('textarea');
        const commentLinkReply = item.querySelector('.comment__link-reply');
        commentLinkReply.addEventListener('click', (evt) => {
          evt.preventDefault();
          if (!item.classList.contains('is-active')) {
            item.classList.add('is-active');
            if (!commentLinkReply.classList.contains('hidden')) {
              commentLinkReply.classList.add('hidden');
            }
          }
          commentFormReplyTextarea.addEventListener('blur', () => {
            if (commentFormReplyTextarea.value === '' && item.classList.contains('is-active')) {
              item.classList.remove('is-active');
              if (commentLinkReply.classList.contains('hidden')) {
                commentLinkReply.classList.remove('hidden');
              }
            }
          });
        });
      }
    }
  }
}

export {showReplyFormComment};
