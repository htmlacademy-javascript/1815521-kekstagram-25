import {createPhotoArray} from './data.js';

const usersPictures = document.querySelector('.pictures');
const usersPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPicture = createPhotoArray();

const similarListFragment = document.createDocumentFragment();

similarPicture.forEach(({
  url,
  comments,
  likes
}) => {
  const pictureElement = usersPicturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  usersPictures.appendChild(pictureElement);
});

usersPictures.append(similarListFragment);
