//A long list of html element variables
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
let rightOrWrong = document.getElementById("rightOrWrong");

//The score variable (for user's quiz score); currentQuestionIndex
//variable (which keeps track of which question the quiz is on); and
///the secondsleft variable (which keeps track of how much time a user
//has left to complete the quiz)
let score = 0;
let currentQuestionIndex;
let secondsLeft = 100;

//The quiz question array
let quizArr = [
    {
        q: "What's my name?",
        a1: {
            index: 1,
            text: "David",
            correct: "false"
        },
        a2: {
            index: 2,
            text: "Michael",
            correct: "false"
        },
        a3: {
            index: 3,
            text: "Brian",
            correct: "true"
        },
        a4: {
            index: 4,
            text: "Hameed",
            correct: "false"
        },
    },
    {
        q: "What's my favorite color?",
        a1: {
            index: 1,
            text: "Green",
            correct: "true"
        },
        a2: {
            index: 2,
            text: "Mauve",
            correct: "false"
        },
        a3: {
            index: 3,
            text: "Gray",
            correct: "false"
        },
        a4: {
            index: 4,
            text: "Hameed",
            correct: "false"
        },
    },
    {
        q: "What was my cat's name?",
        a1: {
            index: 1,
            text: "Chicken",
            correct: "false"
        },
        a2: {
            index: 2,
            text: "Yossarian",
            correct: "true"
        },
        a3: {
            index: 3,
            text: "Spot",
            correct: "false"
        },
        a4: {
            index: 4,
            text: "Hameed",
            correct: "false"
        },
    },
    {
        q: "What's is the fourth question?",
        a1: {
            index: 1,
            text: "Who am I?",
            correct: "false"
        },
        a2: {
            index: 2,
            text: "Where am I?",
            correct: "false"
        },
        a3: {
            index: 3,
            text: "What's my calling?",
            correct: "false"
        },
        a4: {
            index: 4,
            text: "What's the fourth question?",
            correct: "true"
        },
    }
] 

//The setTime function controls the quiz timer, giving users
//100 seconds to complete four quiz questions
function setTime() {
    secondsLeft = 100;
    let timerInterval = setInterval(() => {
        timeField.innerText = `Seconds Left: ${secondsLeft}`;
        secondsLeft--;
        if (secondsLeft < 0) {
            clearIntnnerval(timerInterval);
            timeField.innerText = "";
            gameOver();
        }
    }, 1000)
}

//The intro function starts the game and explains how to start it
function intro() {
    nextButton.style.display = "none";
    newGameButton.style.display = "none";
    questionArea.innerText = "Click to start the game!";
    currentQuestionIndex = 0;
}

//The displayQuestions function grabs info from the object array quizArr
//and displays it in the appropriate divs
function displayQuestions() {
    //console.log(currentQuestionIndex);
    rightOrWrong.innerText = "";
    scoreField.innerText = "";
    let obj = quizArr[currentQuestionIndex];
    questionArea.innerText = obj.q.toString();
    answerOne.innerText = obj.a1.text;
    answerOne.value = obj.a1.correct;
    answerTwo.innerText = obj.a2.text;
    answerTwo.value = obj.a2.correct;
    answerThree.innerText = obj.a3.text;
    answerThree.value = obj.a3.correct;
    answerFour.innerText = obj.a4.text;
    answerFour.value = obj.a4.correct;
    startButton.style.display = "none";
    nextButton.style.display = "none";
}

//The checkAnswer function checks a divs value (which is derived
//from the quizArr object) to determine how to express to the user
//whether they got the right or wrong answer
function checkAnswer(val) {
    console.log(val);
    nextButton.style.display = "block";
    if (val === "false") {
        rightOrWrong.innerText = "Wrong answer!";
        secondsLeft -= 5;
    } else if (val === "true") {
        rightOrWrong.innerText = "Right answer!";
        score += 1000; 
    }
}

//Sets the end of game state
function gameOver() {
        questionArea.innerText = "Game Over";
        answerOne.innerText = "";
        answerTwo.innerText = "";
        answerThree.innerText = "";
        answerFour.innerText = "";
        rightOrWrong.innerText = "";
        scoreField.innerText = `Your score: ${score} points`;
        newGameButton.style.display = "block";
        nextButton.style.display = "none";
        secondsLeft = 0;
}

startButton.addEventListener("click", (e) => {
    e.preventDefault();
    displayQuestions();
    setTime();
})

newGameButton.addEventListener("click", (e) => {
    e.preventDefault();
    currentQuestionIndex = 0;
    displayQuestions();
    setTime();
}) 

answerOne.addEventListener("click", (e) => {
    e.preventDefault();
    checkAnswer(e.target.value);
});

answerTwo.addEventListener("click", (e) => {
    e.preventDefault();
    checkAnswer(e.target.value);
});

answerThree.addEventListener("click", (e) => {
    e.preventDefault();
    checkAnswer(e.target.value);
});

answerFour.addEventListener("click", (e) => {
    e.preventDefault();
    checkAnswer(e.target.value);
});

nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentQuestionIndex < quizArr.length - 1) {
        currentQuestionIndex++;
        //console.log(currentQuestionIndex);
        displayQuestions();
    } else {
        gameOver();
    }
})


intro();
