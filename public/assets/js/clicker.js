const zoneClicker = document.getElementById('zone-click');
let clickCount = 0;

zoneClicker.addEventListener('click', () => {
    clickCount++;
    zoneClicker.innerHTML = clickCount;

});

let timeButton = document.getElementById('time-button');

document.addEventListener('DOMContentLoaded', function () {
    let timeButton1 = document.getElementById('time-button1');
    let timeButton2 = document.getElementById('time-button2');
    let timeButton3 = document.getElementById('time-button3');

    timeButton1.addEventListener('click', () => {
        timeButton1.classList.add('active');
        timeButton2.classList.remove('active');
        timeButton3.classList.remove('active');
        timerElement.innerHTML = "00:05:00";
    });

    timeButton2.addEventListener('click', () => {
        timeButton2.classList.add('active');
        timeButton1.classList.remove('active');
        timeButton3.classList.remove('active');
        timerElement.innerHTML = "00:10:00";
    });

    timeButton3.addEventListener('click', () => {
        timeButton3.classList.add('active');
        timeButton1.classList.remove('active');
        timeButton2.classList.remove('active');
        timerElement.innerHTML = "00:30:00";
    });
});

let timerElement = document.getElementById('timer');
let zoneClick = document.getElementById('zone-click');


let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
    isRunning = true;
    timer = setInterval(function () {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        timerElement.innerHTML = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds / 10);
    }, 10);
}

function resetTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    timerElement.innerHTML = "00:00:00";
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}

zoneClick.addEventListener('click', function () {
    if (!isRunning) {
        startTimer();
    }
});







