function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "scissors" || userInput === "paper") {
      return userInput;
    } else {
      console.log("Error")
    }
  }
  
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let compChoice;
    if (choice === 0) {
      compChoice = "rock";
    } else if (choice === 1) {
      compChoice = "scissors";
    } else if (choice === 2) {
      compChoice = "paper";
    }
    return compChoice;
  }
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      return "User wins!";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      return "User loses!";
    } else if (userChoice === "rock" & computerChoice === "scissors") {
      return "User wins!";
    } else if (userChoice === "rock" && computerChoice === "paper") {
      return "User loses!";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      return "User loses!";
    } else if (userChoice == "scissors" && computerChoice === "paper") {
      return "User wins!";
    }
    
  }
  
  function playGame() {
    let user = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log(user);
    console.log(computerChoice);
    console.log(determineWinner(user, computerChoice));
  }
  
  playGame()