let compWinCount;
let playerWinCount;
let count = 1;
let computerChoice = ""
let playerChoice = ""
const image = document.getElementsByClassName('image');

const btn = document.querySelector("#btn");
const finalResultPrint = document.getElementById('final-result');
const roundResultPrint = document.getElementById('round-result');


btn.onclick = () => game() // btn pokarze się dopiero po skończonej grze 5 rund


function game() {
    compWinCount = 0;
    playerWinCount = 0;
    count = 1;
    for (let i=0; i < image.length; i++ ) {
        image[i].addEventListener('click', playerSelection)
    }
    roundResultPrint.textContent = "game result"
    finalResultPrint.textContent = "final result"
}

function playerSelection(e) {
    playerChoice = e.target.id.toUpperCase();
    //console.log(playerChoice, 'player')
    playRounds(playerChoice) 
}


function playRounds(playerChoice) {
    const selection = ["ROCK", "PAPER", "SCISSORS"];
    computerChoice = selection[Math.floor(Math.random() * selection.length)];
    // console.log(computerChoice, 'computer')
    roundResult = winner(playerChoice, computerChoice);
    roundResultPrint.textContent = `${roundResult}`
    count += 1
    //console.log(count)
    if (count > 5) {
        for (let i=0; i < image.length; i++ ) {
            image[i].removeEventListener('click', playerSelection)
        }
        finalResultPrint.textContent = `Computer: ${compWinCount} vs You: ${playerWinCount}`        
        }
};


function winner(playerChoice, computerChoice) {
    if ( playerChoice == "ROCK" && computerChoice == "SCISSORS" ) {
        playerWinCount += 1;
        return "You Win! ROCK beats SCISSORS."
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        playerWinCount += 1;
        return "You Win! PAPER beats ROCK."
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        playerWinCount += 1;
        return "You Win! SCISSORS beats PAPER" 
    } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK" ) {
        compWinCount += 1;
        return "You Lose! ROCK beats SCISSORS."
    } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        compWinCount += 1;
        return "You Lose! PAPER beats ROCK."
    } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        compWinCount += 1;
        return "You Lose! SCISSORS beats PAPER"
    } else {
        compWinCount += 0.5;
        playerWinCount += 0.5;
        return "Draw " + playerChoice + " & " +  computerChoice
    }
  };

  game();
