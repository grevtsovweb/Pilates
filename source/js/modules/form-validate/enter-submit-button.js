// функция отключает кнопку отправки форму при пустом поле

const inputElements = document.querySelectorAll('.sign-in-form__input-element');
const buttonHandler = document.querySelector('.sign-in-form__button');

const enterSubmitButton = () => {
  document.addEventListener('input', () => {
    for (let i = 0; i < inputElements.length; i++) {
      if (inputElements[i].value === '') {
        buttonHandler.disabled = true;
        return;
      } else {
        buttonHandler.disabled = false;
      }
    }
  });
};

export {enterSubmitButton};
