const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__label__error-text',
});

//Проверка, что нельзя указать больше пяти хэш-тегов
function validateHashtagLengts(value) {
  return value.trim().split(' ').length < 6;
}

//Проверка уникальности
function validateHashtagsUniqueness(value) {
  const hashTagArray = value.trim().toLowerCase().split(' ');
  const noDuplicate = new Set(hashTagArray);

  return hashTagArray.length === noDuplicate.size;
}

//Проверка символов хэш-тега
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

function validateHashtag(value) {
  if (value === '') {return true;}
  const hashTagArray = value.trim().split(' ');
  return hashTagArray.every((hashtag) => regExp.test(hashtag));
}

//Проверка длины комментария
function validateComments (value) {
  return value.length <= 140;
}

const hashtagInput = document.querySelector('.text__hashtags');

pristine.addValidator(
  hashtagInput,
  validateHashtagLengts,
  'Ой-ой, слишком много хэш-тегов, их должно быть не больше 5'
);

pristine.addValidator(
  hashtagInput,
  validateHashtagsUniqueness,
  'Ой-ой, хэш-теги не должны повторяться'
);

pristine.addValidator(
  hashtagInput,
  validateHashtag,
  'Ой-ой, хэш-тег должен начинаться с #, состоять только из букв и цифр и содержать не больше 20 символов'
);

const commentInput = document.querySelector('.text__description');

pristine.addValidator(
  commentInput,
  validateComments,
  'Ой-ой, комментарий должен содержать не больше 140 символов'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    window.console.log('Можно отправлять');
  } else {
    window.console.log('Форма невалидна');
  }
});
