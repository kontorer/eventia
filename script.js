document.querySelector('.menu__icon').addEventListener('click', d => {
    document.querySelector('.menu').classList.toggle("menu_state_open");
    document.querySelector('.menu__icon').classList.toggle("menu_state_open");
})


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline="December 18 2020 00:00:00 GMT+0300";
initializeClock('counter', deadline);





// <div class="day-button day-button-1 style-grad">
// <div class="agenda-inner agenda-day-1 agenda-day-active">
// element.classList.add("mystyle");

var dayButton1 = document.querySelector('.day-button-1');
var dayButton2 = document.querySelector('.day-button-2');
var dayButton3 = document.querySelector('.day-button-3');
var agendaBlocks = document.querySelectorAll('.agenda-inner');
var dayButtons = document.querySelectorAll('.day-button');

function showAgenda() {
  dayButtons.forEach(buttn => {
    buttn.classList.remove("style-grad");
  });
  agendaBlocks.forEach(block => {
    block.classList.remove("agenda-day-active");
  });
  this.classList.add("style-grad");
  agendaBlocks[this.id-1].classList.add("agenda-day-active");
}

dayButton1.addEventListener('click', showAgenda);
dayButton2.addEventListener('click', showAgenda);
dayButton3.addEventListener('click', showAgenda);