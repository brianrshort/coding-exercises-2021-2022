let minDisplay = document.getElementById("minutes");
let secDisplay = document.getElementById("seconds");
let milliDisplay = document.getElementById("milliseconds");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let clockStarted = false; 

function displayTime() {
    minDisplay.innerText = minutes;
    secDisplay.innerText = seconds;
    milliDisplay.innerText = milliseconds;
}

displayTime();