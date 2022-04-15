import {
  isEscapeKey
} from './util.js';

const fullscreenUserPhoto = document.querySelector('.big-picture');
const body = document.querySelector('body');

const onFullscreenPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onFullscreenPhotoClose();
  }
};

function onFullscreenPhotoOpen() {
  fullscreenUserPhoto.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFullscreenPhotoEscKeydown);
}

function onFullscreenPhotoClose() {
  fullscreenUserPhoto.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown',onFullscreenPhotoEscKeydown);
}

export {onFullscreenPhotoOpen, onFullscreenPhotoClose};

