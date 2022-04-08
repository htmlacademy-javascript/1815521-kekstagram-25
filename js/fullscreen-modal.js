import {
  isEscapeKey
} from './util.js';

const fullscreenUserPhoto = document.querySelector('.big-picture');
const fullscreenUserPhotoOpen = document.querySelector('.pictures');
const fullscreenUserPhotoClose = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

//Переменные для скрытия счетчика лайков и загрузки изображения
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.social__comments-loader');

const onFullscreenPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullscreenPhoto();
  }
};

function openFullscreenPhoto() {
  fullscreenUserPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  //Скрытие полей счетчика лайков и загрузки изображения
  commentsCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onFullscreenPhotoEscKeydown);
}

function closeFullscreenPhoto() {
  fullscreenUserPhoto.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown',onFullscreenPhotoEscKeydown);
}

fullscreenUserPhotoOpen.addEventListener('click', () => {
  openFullscreenPhoto();
});

fullscreenUserPhotoClose.addEventListener('click', () => {
  closeFullscreenPhoto();
});
