const selection = ["Rock", "Paper", "Scissors"];
let compWinCount;
let playerWinCount;

function game() {
    let count = 1;
    compWinCount = 0;
    playerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log(`Game number ${count}`);
        count += 1;
        console.log(playRound(playerSelection, computerSelection));
     }
     console.log(`Total score: Player: ${playerWinCount} / Computer: ${compWinCount}`);
     nextGame = prompt("Do you want to play once again? (y/n)")
     if (nextGame == "y" || nextGame == "Y") {
        game()
     }
};

function playRound(playerSelection, computerSelection) {
    if ( playerSelection == "Rock" && computerSelection == "Scissors" ) {
        playerWinCount += 1;
        return "You Win! Rock beats Scissors."
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerWinCount += 1;
        return "You Win! Paper beats Rock."
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerWinCount += 1;
        return "You Win! Scissors beats Paper" 
    } else if (playerSelection == "Scissors" && computerSelection == "Rock" ) {
        compWinCount += 1;
        return "You Lose! Rock beats Scissors."
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        compWinCount += 1;
        return "You Lose! Paper beats Rock."
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        compWinCount += 1;
        return "You Lose! Scissors beats Paper"
    } else {
        compWinCount += 0.5;
        playerWinCount += 0.5;
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