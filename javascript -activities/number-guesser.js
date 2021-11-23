let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  let target = Math.floor(Math.random() * 9);
  return target;
}

function compareGuesses(humanGuess, computerGuess, secretTarget) {
  if (Math.abs(humanGuess - secretTarget) > Math.abs(computerGuess - secretTarget)) {
    return false;
  } else {
    return true;
  }
}

function updateScore(string) {
  if (string === "human") {
    humanScore++;
  } else if (string === "computer") {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}