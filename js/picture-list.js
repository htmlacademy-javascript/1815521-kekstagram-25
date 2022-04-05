import {createPhotoArray} from './data.js';

const USERS_PICTURES = document.querySelector('.pictures');
const USERS_PICTURES_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');

const similarPicture = createPhotoArray(25);

const similarListFragment = document.createDocumentFragment();

similarPicture.forEach(({
  url,
  comments,
  likes
}) => {
  const pictureElement = USERS_PICTURES_TEMPLATE.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  USERS_PICTURES.appendChild(pictureElement);
});

USERS_PICTURES.append(similarListFragment);
