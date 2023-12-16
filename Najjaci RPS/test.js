const playerInputOptions = document.querySelectorAll(".rps-button");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result-text");
const resetGame = document.querySelector("#round-button");
let roundState;

playerInputOptions.forEach(inputOption => inputOption.addEventListener("click", () => {
  resetGame.style.display = "inline-block";
  console.log("Button pressed!")
  playerInputOptions.forEach(junk => {
    if(junk !== inputOption) {
      junk.remove();
    }
  })
}))

resetGame.addEventListener("click", () => {
  resetGame.style.display = "none";
  computerChoiceDisplay.src = "Assets/Undecided.png"
})

