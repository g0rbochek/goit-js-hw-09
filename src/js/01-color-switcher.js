function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let timerId = null;
const elements = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

elements.btnStop.setAttribute('disabled', 'disabled');

elements.btnStart.addEventListener('click', changeColorByStart);
elements.btnStop.addEventListener('click', stopChanges);

function changeColorByStart(e) {
  elements.btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  elements.btnStart.setAttribute('disabled', 'disabled');
}

function stopChanges(e) {
  clearInterval(timerId);
  elements.btnStop.setAttribute('disabled', 'disabled');
  elements.btnStart.removeAttribute('disabled');
}
