//Функция, возвращающая случайное целое число из переданного диапазона включительно
//Использованы данные с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw
function getRandomInt(min, max) {
  if (min < 0) {
    throw 'Incorrect \'min\' value';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return min + Math.floor(Math.random() * (max-min+1));
}

getRandomInt(1, 7);

//Функция для проверки максимальной длины строки
//Использованы данные с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
function checkMaxLength(comment, maxLength) {
  return comment.length <= maxLength;
}

checkMaxLength ('Hello', 10);
