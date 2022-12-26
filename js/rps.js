// alert("ello form javascript")

const selection = ["Rock", "Paper", "Scissors"];

function playRound(playerSelection, computerSelection) {
    if ( playerSelection == "Rock" && computerSelection == "Scissors" ) {
        return "You Win! Rock beats Scissors."
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock."
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper" 
    } else if (playerSelection == "Scissors" && computerSelection == "Rock" ) {
        return "You Lose! Rock beats Scissors."
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock."
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else {
        return "Draw " + playerSelection + " & " + computerSelection
    }
  }


function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

computerSelection = getComputerChoice();
// console.log(computerSelection);

playerSelection = "Rock"

console.log(playRound(playerSelection, computerSelection));