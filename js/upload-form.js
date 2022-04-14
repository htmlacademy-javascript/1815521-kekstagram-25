import {
  isEscapeKey
} from './util.js';

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureUploadInput = document.querySelector('.img-upload__input');
const pictureUploadOverlay = document.querySelector('.img-upload__overlay ');
const pictureUplodeFormClose = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const onFullscreenPhotoEscKeydown = (evt) => {
  const focus = evt.target.matches('.text__hashtags:focus') || evt.target.matches('textarea:focus');
  if (focus) {
    return evt.stopPropagation();
  }

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUploadFormClose();
  }
};

function onUploadFormOpen() {
  pictureUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFullscreenPhotoEscKeydown);
}

function onUploadFormClose() {
  pictureUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onFullscreenPhotoEscKeydown);

  pictureUploadForm.reset();
  pictureUploadInput.value = '';
}

pictureUploadInput.addEventListener('click', onUploadFormOpen);

pictureUplodeFormClose.addEventListener('click', onUploadFormClose);
