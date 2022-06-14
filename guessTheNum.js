function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
} 
let num;
let tryings;
let msgMistakes = ['Попробуйте снова', 'Не отчаивайтесь!', 'Хорошая попытка, но нет!'];
let msgCorrect = ['Вы выиграли!', 'Потрясающе!', 'Верно!', 'Вы меня читаете!']

function showMsgMist() {
  const msg = random(0, msgMistakes.length-1);
  return msgMistakes[msg];
}
function showMsgCorr() {
  const msg = random(0, msgCorrect.length-1);
  return msgCorrect[msg];
}


function setNum() {
  const min = +prompt('Введите минимальное число!');
  const max = +prompt('Введите максимальное число!');
  num = random(min, max);
  tryings = Math.round((max-min) / 3);
  return num;
};

function tryGuess() {
  let userNum = +prompt('Попробуйте угадать мое число!');
  tryings--;
  let count = 0;
  count++;
  while (userNum !== num && tryings != 0) {
    if (num > userNum) {
      userNum = +prompt('Мое число больше! ' + showMsgMist() + 'Попыток осталось:  ' + tryings);
      tryings--;
      count++;
    }
    if (num < userNum) {
      userNum = +prompt('Мое число меньше! ' + showMsgMist() + 'Попыток осталось:  ' + tryings);
      tryings--;
      count++;
    }
    if (userNum == num) {
      alert(showMsgCorr() + ' Потрачено попыток: ' + count);
      break;
    }
    if (tryings == 0) {
      alert('Попытки кончались! Вы проиграли!');
      break;
    }
  }
}
tryGuess();