const birth = '21 Jan 2023'
const day = document.getElementById('days');
const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const second = document.getElementById('seconds');

function countdown() {
    const birthDate = new Date(birth);
    const todaysDate = new Date();

    const totalSeconds = (birthDate - todaysDate)/1000 ;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60) %60;
    const seconds = Math.floor(totalSeconds % 60);

    // console.log(days , hours ,mins,seconds);
    day.innerText=formatTime(days);
    hour.innerText=formatTime(hours);
    min.innerText=formatTime(mins);
    second.innerText=formatTime(seconds);
}

function formatTime(time) {
    return time <10 ? (`0${time}`) : time
}
countdown();

setInterval(countdown,1000);