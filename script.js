const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("Error, please type: rock, paper, or scissors");
      return null; 
    }
  };
  
  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "Sorry, computer won";
      } else {
        return "Congratulations, you won";
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "Sorry, computer won";
      } else {
        return "Congratulations, you won";
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "Sorry, computer won";
      } else {
        return "Congratulations, you won";
      }
    }
  };
  
  const playGame = (userChoice) => {
    const userSelection = getUserChoice(userChoice);
    const computerSelection = getComputerChoice();
    if (userSelection) { 
      document.getElementById('user-choice').innerText = `You chose: ${userSelection}`;
      document.getElementById('computer-choice').innerText = `Computer chose: ${computerSelection}`;
      document.getElementById('winner').innerText = `Result: ${determineWinner(userSelection, computerSelection)}`;
    }
  };
  
  document.getElementById('rock').addEventListener('click', () => playGame('rock'));
  document.getElementById('paper').addEventListener('click', () => playGame('paper'));
  document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
  