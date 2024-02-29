const boxControls = document.querySelector('#controls');
const boxSquares = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputDigit = document.querySelector('input');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

createBtn.classList.add('create');
destroyBtn.classList.add('destroy');

function onCreateBtnClick() {
  onDestroyBtnClick();
  const amount = parseInt(inputDigit.value);
  if (amount >= 1 && amount <= 100) {
    const boxesMarkup = createBoxes(amount).join('');
    inputDigit.value = '';
    return boxSquares.insertAdjacentHTML('afterbegin', boxesMarkup);
  }
}

function onDestroyBtnClick() {
  boxSquares.innerHTML = '';
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
