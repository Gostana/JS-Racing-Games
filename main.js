const score = document.querySelector('.score'),
  start = document.querySelector('.start'),
  gameArea = document.querySelector('.gameArea');
car = document.createElement('div');

car.classList.add('car');


/*start.onclick = function () {
  start.classList.add('hide');
};*/
start.addEventListener('click', startGame);

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
};
/*если значение какогото свойства будет меняться на true, 
то машина будет менять свое направление в эту сторону */
const setting = {
  start: false,
  score: 0,
  speed: 3
};

function startGame() {
  start.classList.add('hide');
  setting.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
};

function playGame() {
  console.log('Play game');
  if (setting.start === true) {
    //пока start будет true функция будет перезапускаться/ ===true это можно опустить/
    requestAnimationFrame(playGame); //рекурсия
  }

};

function startRun(event) {
  event.preventDefault();
  keys[event.key] = true;
};
/*когда нажимем клавишу,
здесь обьект event будет выбирать свойство, которому оно дает направоние,т.е true */


function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
};
/*здесь мы отпускаем клавишу*/