let userScore = 0;

let computerScore = 0;

const btns = document.querySelectorAll("button");

const resetButton = document.querySelector("button.playAgain");

const resultBox = document.querySelector(".result");

const userCount = document.querySelector(".userScore");

const computerCount = document.querySelector(".computerScore");

const roundResult = document.querySelector(".roundResult");

const getComputerChoice = () => {
  const gameArray = ["Rock", "Paper", "Scissors"];
  const random_num = Math_random(3);
  const computerSelection = gameArray[random_num];
  return computerSelection;
};

//  Making the variables which indicate that the player and computer chose
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
      roundResult.textContent = "You have tied! You both chose Rock";
    } else if (computerSelection == "Paper") {
      computerScore++;
      roundResult.textContent = "You lose! Paper beats Rock";
    } else if (computerSelection == "Scissors") {
      userScore++;
      roundResult.textContent = "You win! Rock beats Scissors";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      userScore++;
      roundResult.textContent = "You win! Paper beats Rock";
    } else if (computerSelection == "Paper") {
      roundResult.textContent = "You have tied! You both chose Paper";
    } else if (computerSelection == "Scissors") {
      computerScore++;
      roundResult.textContent = "You lose! Scissors beat Paper";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      computerScore++;
      roundResult.textContent = "You lose! Rock beats Scissors";
    } else if (computerSelection == "Paper") {
      userScore++;
      roundResult.textContent = "You win! Scissors beats Paper";
    } else if (computerSelection == "Scissors") {
      roundResult.textContent = "You have tied! You both chose Scissors";
    }
  }
}

let computerSelection = getComputerChoice();

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let computerSelection = getComputerChoice();
    playRound(e.target.id, computerSelection);
    userCount.textContent = "Your Score: " + `${userScore}`;
    computerCount.textContent = "The enemies' Score: " + `${computerScore}`;
    if (userScore >= 5) {
      resultBox.textContent = "Well done! You have beaten the machine!";
      document.querySelector("#Rock").disabled = true;
      document.querySelector("#Scissors").disabled = true;
      document.querySelector("#Paper").disabled = true;
    }
    if (computerScore >= 5) {
      resultBox.textContent = "Oh no! You have been beaten by the machine!";
      document.querySelector("#Rock").disabled = true;
      document.querySelector("#Scissors").disabled = true;
      document.querySelector("#Paper").disabled = true;
    }
  });
});

// Helper Functions
function normalise(str) {
  let newString = str[0].toUpperCase() + str.substring(1).toLowerCase();
  return newString;
}

function Math_random(num) {
  return Math.floor(Math.random(num) * +num);
}

resetButton.addEventListener("click", () => {
  document.location.reload();
});
