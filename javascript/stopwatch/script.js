let minDisplay = document.getElementById("minutes");
let secDisplay = document.getElementById("seconds");
let milliDisplay = document.getElementById("milliseconds");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function displayTime() {
    minDisplay.innerText = minutes;
    secDisplay.innerText = seconds;
    milliDisplay.innerText = milliseconds;
}

startButton.addEventListener("click", () => {
        let minInterval = setInterval(() => {
            minutes++;
            minDisplay.innerText = minutes;
        }, 60000);
        let secInterval = setInterval(() => {
            seconds++;
            secDisplay.innerText = seconds;
            if (seconds > 60) {
                seconds = 0;
            }
        }, 1000);
        let milliInterval = setInterval(() => {
            milliseconds++;
            milliDisplay.innerText = milliseconds;
            if (milliseconds > 99) {
                milliseconds = 0;
            }
        }, 10);
        stopButton.addEventListener("click", () => {
            clearInterval(minInterval);
            clearInterval(secInterval);
            clearInterval(milliInterval);
        })
})

resetButton.addEventListener("click", () => {
    seconds = 0;
    milliseconds = 0;
    minutes = 0;
    displayTime();
})
