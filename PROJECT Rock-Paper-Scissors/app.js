// Rock Paper Scissor
// The winner is decided based on the following rules:
// Rock beats Scissors (Rock crushes Scissors)
// Scissors beats Paper (Scissors cut Paper)
// Paper beats Rock (Paper covers Rock)

// **************************** Rock - Paper - Scissors Game *******************************************

// Array containing the possible choices for the game: rock, paper, and scissors
const choices = ["rock", "paper", "scissors"];

// References to DOM elements where the player's choice, computer's choice, and game result will be displayed
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// References to DOM elements where the player's and computer's scores will be displayed
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// Variables to keep track of the player's and computer's scores
let playerScore = 0;
let computerScore = 0;



// Function to play the Rock-Paper-Scissors game
function playGame(playerChoice) {
  // Randomly select the computer's choice from the 'choices' array
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = ""; // Variable to store the result of the game
  // Check if the player's choice and the computer's choice are the same (tie)
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  }
  // If not a tie, determine the winner based on the player's choice
  else {
    switch (playerChoice) {
      case "rock":
        // Rock beats scissors, otherwise the player loses
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE";
        break;
      case "paper":
        // Paper beats rock, otherwise the player loses
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE";
        break;
      case "scissors":
        // Scissors beat paper, otherwise the player loses
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE";
        break;

    }
  }

  // Update the DOM to display the player's choice, computer's choice, and the result
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  // Remove any existing color classes from the result display (for styling)
  resultDisplay.classList.remove("greenText", "redText");


  // Update the result display styling and scores based on the game result
  switch (result) {
    case "YOU WIN!":
      // Add green text styling for a win
      resultDisplay.classList.add("greenText");
      playerScore++;       // Increment the player's score and update the score display
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE":
      // Add red text styling for a loss
      resultDisplay.classList.add("redText");
      computerScore++;       // Increment the computer's score and update the score display
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}