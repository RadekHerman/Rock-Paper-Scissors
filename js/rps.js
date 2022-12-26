// alert("ello form javascript")

const selection = ["Rock", "Paper", "Scissors"];

// console.log(computerSelection);

function game() {
    let count = 1;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log(`Game number ${count}`);
        count += 1;
        console.log(playRound(playerSelection, computerSelection));
     }
};



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
  };

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
};

function getPlayerChoice() {
    choice = prompt("What is your choice? Rock, Paper or Scissors?")
    return choice[0].toUpperCase() + choice.substr(1).toLowerCase();
};  


game();