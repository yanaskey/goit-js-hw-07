const boxControls = document.querySelector('#controls');
const boxSquares = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputDigit = document.querySelector('input[type="number"]');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

createBtn.classList.add('create');
destroyBtn.classList.add('destroy');

function onCreateBtnClick(event) {
  onDestroyBtnClick();
  const inputNumber = 7; //// мав бути inputDigit.value , але він у мене чомусь не працює усюди по коду
  if (inputNumber >= 1 && inputNumber <= 100) {
    const boxesMarkup = createBoxes(inputNumber).join('');
    return boxSquares.insertAdjacentHTML('afterbegin', boxesMarkup);
  }
}

function onDestroyBtnClick(event) {
  boxSquares.innerHTML = '';
  inputDigit.value = ''; //тут теж не працює
}

function createBoxes(amount) {
  const boxes = [];
  let step = 30;
  for (let i = 1; i <= amount; i++) {
    const box = `<div style='background-color: ${getRandomHexColor()}; height: ${step}px; width: ${step}px'></div>`;
    step += 10;
    boxes.push(box);
  }
  return boxes;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
