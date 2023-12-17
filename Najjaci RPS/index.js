const playerInputOptions = document.querySelectorAll(".rps-button");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result-text");
const resetGame = document.querySelector("#round-button");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
let playerScore = 1;
let computerScore = 1;

playerInputOptions.forEach(inputOption => inputOption.addEventListener("click", () => {
  playerChoice = inputOption.id
  computerChoiceOptions = [
    document.getElementById("Rock").id,
    document.getElementById("Paper").id,
    document.getElementById("Scissors").id
  ]
  computerChoice = computerChoiceOptions[Math.floor(Math.random() * 3)]
  resetGame.style.display = "inline-block";
  inputOption.disabled = true;

  playerInputOptions.forEach(remainingOption => {
    
    if(remainingOption !== inputOption) {
      remainingOption.style.display = "none"
    }
  })

  changeComputerChoiceDisplay();
  whoWins();
}))

resetGame.addEventListener("click", () => {
  resetGame.style.display = "none";
  computerChoiceDisplay.src = "Assets/Undecided.png"
  playerInputOptions.forEach(option => {
    option.disabled = false;
  })
  playerInputOptions.forEach(option => {
    option.style.display = "inline-block";
  })
  resultText.textContent = "Undecided"
})

function changeComputerChoiceDisplay() {
  if(computerChoice == "Rock") {
    computerChoiceDisplay.src = "Assets/Rock.png"
  }
  else if(computerChoice == "Paper") {
    computerChoiceDisplay.src = "Assets/Paper.png"
  }
  else if(computerChoice == "Scissors") {
    computerChoiceDisplay.src = "Assets/Scissors.png"
  }
} 
function whoWins() {
  if(playerChoice == "Rock" && computerChoice == "Scissors"){
    playerWon();
  }
  else if (playerChoice == "Rock" && computerChoice == "Paper") {
    computerWon ();
  }

  if(playerChoice == "Paper" && computerChoice == "Rock"){
    playerWon();
  }
  else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    computerWon ();
  }

  if(playerChoice == "Scissors" && computerChoice == "Paper"){
    playerWon();
  }
  else if (playerChoice == "Scissors" && computerChoice == "Rock") {
    computerWon ();
  }

  if(playerChoice == computerChoice) {
    resultText.innerHTML = "It's a draw!"
  }
}
function playerWon() {
  resultText.innerHTML = "You won!"
  playerScoreDisplay.innerHTML = playerScore++
}
function computerWon() {
  resultText.innerHTML = "You lost!"
  computerScoreDisplay.innerHTML = computerScore++
}
