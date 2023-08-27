import flatpickr from 'flatpickr'; // бібліотека вибору дати(чекни приклад :))
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix'; // push notificashion

const elements = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let difference;

if (!difference) {
  elements.btnStart.setAttribute('disabled', 'disabled');
}
// liberry
const options = {
  enableTime: true, // show time in input
  time_24hr: true, // 24 hours format
  defaultDate: new Date(), // new Date
  minuteIncrement: 1,
  // onClose start, when calendar is close
  onClose(selectedDates) {
    const choisedDate = Date.parse(flatpickrInput.selectedDates[0]);
    const currentDate = Date.parse(options.defaultDate);

    difference = choisedDate - currentDate;

    if (difference < 0) {
      Notiflix.Notify.failure('Please choose a date in the future'); // fail choose
    } else {
      elements.btnStart.removeAttribute('disabled');
    }

    elements.btnStart.addEventListener('click', handlerOnBtn);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function watch(time) {
  writeDate(time);
  const timer = setInterval(() => {
    time -= 1000;
    writeDate(time);
    if (time === 0) {
      clearInterval(timer);
      Notiflix.Notify.success('Time is up');
    }
  }, 1000);
}

const flatpickrInput = flatpickr(elements.input, options);
// liberry

function handlerOnBtn(e) {
  e.target.setAttribute('disabled', 'disabled');
  elements.input.setAttribute('disabled', 'disabled');

  watch(difference);
}

function writeDate(time) {
  const { days, hours, minutes, seconds } = convertMs(time);
  elements.days.innerHTML = addLeadingZero(days);
  elements.hours.innerHTML = addLeadingZero(hours);
  elements.minutes.innerHTML = addLeadingZero(minutes);
  elements.seconds.innerHTML = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, '0');
}
