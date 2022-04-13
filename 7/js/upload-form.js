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
    closeUploadForm();
  }
};

function openUploadForm() {
  pictureUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFullscreenPhotoEscKeydown);
}

function closeUploadForm() {
  pictureUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onFullscreenPhotoEscKeydown);

  pictureUploadForm.reset();
  pictureUploadInput.value = '';
}

pictureUploadInput.addEventListener('click', () => {
  openUploadForm();
});

pictureUplodeFormClose.addEventListener('click', () => {
  closeUploadForm();
});

/*
function pictureUpload() {
  const onPictureUpload = (event) => {
    console.log(event.target.files);
  };

  uploadInput.addEventListener('change', onPictureUpload);
}

pictureUpload();
*/
