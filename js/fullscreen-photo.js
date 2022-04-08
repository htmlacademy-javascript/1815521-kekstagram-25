const picturePhoto = document.querySelector('.big-picture__img img');
const pictureLikeCounter = document.querySelector('.likes-count');
const pictureCommentCounter = document.querySelector('.comments-count');
const pictureDescription = document.querySelector('.social__caption');

const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');

const similarListFragment = document.createDocumentFragment();

const renderComment = ({avatar, name, message}) => {
  const comment = commentItem.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;
  similarListFragment.append(comment);
};

const renderAllComments = (comments) => {
  commentList.innerHTML = '';
  comments.forEach(renderComment);
  commentList.append(similarListFragment);
};

const renderFullPicture = (url, description, likes, comments) => {
  picturePhoto.src = url;
  pictureLikeCounter.textContent = likes;
  pictureCommentCounter.textContent = comments.length;
  pictureDescription.textContent = description;
  renderAllComments(comments);
};

export {
  renderFullPicture
};
