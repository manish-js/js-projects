import StopWatch from './stopWatch.js';
const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');

const sp = new StopWatch;

startBtn.addEventListener('click', () => {
    sp.startTimer();
});

stopBtn.addEventListener('click', () => {
    sp.stopTimer();
});

resetBtn.addEventListener('click', () => {
    sp.resetTimer();
});



