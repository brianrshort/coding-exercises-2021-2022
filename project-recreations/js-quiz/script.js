//timer score questions Q1 A1 A2 A3 A4 startGame nextQuestion newGame

let timeField = document.getElementById("timer");
let scoreField = document.getElementById("score");
let questionField = docment.getElementById("questions");
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

