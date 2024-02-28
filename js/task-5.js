const colorBtn = document.querySelector('.change-color');
const colorTxt = document.querySelector('.color');

colorBtn.addEventListener('click', onColorBtnClick);

function onColorBtnClick(event) {
  const generatedColor = getRandomHexColor();
  colorTxt.textContent = generatedColor;
  document.body.style.backgroundColor = generatedColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
