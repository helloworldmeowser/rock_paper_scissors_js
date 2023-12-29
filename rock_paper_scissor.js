const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else {
    console.log("Invalid input!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (userInput, computerChoice) => {
  if (userInput === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    }
    if (computerChoice === "rock") {
      return "You won!";
    }
  } else if (userInput === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    }
    if (computerChoice === "scissors") {
      return "You won!";
    }
  } else if (userInput === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    }
    if (computerChoice === "paper") {
      return "You won!";
    }
  } else if (userInput === computerChoice) {
    return "The game is tie!";
  }
};
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
