// Модуль 4 - генерация массива для описания фотографии, опубликованной пользователем.
import {getRandomArrayElement, getRandomInt, shuffleArray} from './util.js';

const PHOTOS_COUNT = 25;
const MIN_COMMENTS_COUNT = 1;
const MAX_COMMENTS_COUNT = 15;

const COMMENT_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];

const USER_NAMES = [
  'Иван',
  'Виктор',
  'Мария',
  'Кристоф',
  'Степан',
  'Юлия',
];

const COMMENT_IDS_POOL = Array.from({
  length: PHOTOS_COUNT * MAX_COMMENTS_COUNT}, (_, x) => x + 1);

shuffleArray(COMMENT_IDS_POOL);

const getRandomCommentText = () => getRandomArrayElement(COMMENT_TEXT);

const createComment = () => {
  const USER_ID = getRandomInt(1, 6);

  return {
    id: COMMENT_IDS_POOL.pop(),
    avatar: `img/avatar-${USER_ID}.svg`,
    message: Array.from({length: getRandomInt(1, 2)},getRandomCommentText,).join(' '),
    name: USER_NAMES[USER_ID - 1],
  };
};

const createPhotoDescription = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `Photo numero ${id}`,
  likes: getRandomInt(15, 200),
  comments: Array.from({ length: getRandomInt(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)},createComment),
});

const createPhotoArray = () => Array.from({length: PHOTOS_COUNT},(_, k) => createPhotoDescription(k + 1));

export {createPhotoArray};
