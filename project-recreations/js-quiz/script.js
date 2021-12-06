let timeField = document.getElementById("timer");
let scoreField = document.getElementById("score");
let questionField = document.getElementById("questions");
let questionArea = document.getElementById("Q1");
let answerOne = document.getElementById("A1");
let answerTwo = document.getElementById("A2");
let answerThree = document.getElementById("A3");
let answerFour = document.getElementById("A4");
let startButton = document.getElementById("startGame");
let nextButton = document.getElementById("nextQuestion");
let newGameButton = document.getElementById("newGame");

let score = 0;
let currentQuestionIndex;
let secondsLeft = 100;

function setTime() {
    secondsLeft = 100;
    let timerInterval = setInterval(() => {
        timeField.innerText = `Seconds Left: ${secondsLeft}`;
        secondsLeft--;
        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            timeField.innerText = "";
        }
    }, 1000)
}

function intro() {
    nextButton.style.display = "none";
    newGameButton.style.display = "none";
    questionArea.innerText = "Click to start the game!";
}

intro();
setTime();