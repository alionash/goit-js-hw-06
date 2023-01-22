function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const span = document.querySelector('.color');

btn.addEventListener('click', onChangeBackgroundColor);

function onChangeBackgroundColor(event) {
  document.body.style.backgroundColor = span.textContent = getRandomHexColor();
}


