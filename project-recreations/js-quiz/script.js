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

let quizArr = [
    {
        q: "What's my name?",
        a1: {
            index: 1,
            text: "David",
            correct: false
        },
        a2: {
            index: 2,
            text: "Michael",
            correct: false
        },
        a3: {
            index: 3,
            text: "Brian",
            correct: true
        },
        a4: {
            index: 4,
            text: "Hameed",
            correct: false
        },
    }
] 

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
    currentQuestionIndex = 0;
}

startButton.addEventListener("click", (e) => {
    e.preventDefault();
    displayQuestions();
    setTime();
})

function displayQuestions() {
    let obj = quizArr[currentQuestionIndex];
    questionArea.innerText = obj.q.toString();
    answerOne.innerText = obj.a1.text;
    answerTwo.innerText = obj.a2.text;
    answerThree.innerText = obj.a3.text;
    answerFour.innerText = obj.a4.text;
}

intro();
