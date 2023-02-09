let compWinCount;
let playerWinCount;
let computerChoice = ""
let playerChoice = ""
const image = document.getElementsByClassName('image');
const btn = document.querySelector("#btn");
const finalResultPrint = document.getElementById('final-result');
const roundResultPrint = document.getElementById('round-result');
const compImage = document.getElementById('comp-image');

function game() {
    compWinCount = 0;
    playerWinCount = 0;
   
	for (let i=0; i < image.length; i++ ) {
	  image[i].addEventListener('click', playerSelection)
	  image[i].addEventListener('mouseout', () => {
		setTimeout(() => {
		  compImage.src = "./img/blank.jpg";
		}, 500);
	  });
	}
    
    roundResultPrint.textContent = ".................."
    finalResultPrint.textContent = ".................."
	btn.onclick = null;
	btn.style.cssText = 'color: lightgrey'
	
    

}

function computerSelection() {
    const selection = ["ROCK", "PAPER", "SCISSORS"];
    computerChoice = selection[Math.floor(Math.random() * selection.length)];
    console.log(computerChoice, 'computer');
    compImage.src = `./img/${computerChoice}.jpg`
    return computerChoice
}

function playRounds(playerChoice) {
    
    computerChoice = computerSelection();
    roundResult = winner(playerChoice, computerChoice);
    roundResultPrint.textContent = `${roundResult}`
	finalResultPrint.textContent = `You: ${playerWinCount} vs Computer: ${compWinCount}`
	//console.log(compWinCount, playerWinCount)
    if (compWinCount >= 5 || playerWinCount >= 5) {
        for (let i=0; i < image.length; i++ ) {
            image[i].removeEventListener('click', playerSelection)
			image[i].removeEventListener('mouseout', function() {
				compImage.src = "./img/blank.jpg"
			})
        } if (compWinCount >= 5 ) {
        finalResultPrint.textContent = `You LOST the match! ${playerWinCount} to ${compWinCount}`
		} else {
		finalResultPrint.textContent = `You WON the match! ${playerWinCount} to ${compWinCount}`
        }
		btn.style.cssText = 'color: brown; font-weight: bold'
		btn.onclick = () => game() // btn pokarze się dopiero po skończonej grze 5 rund
	}
};


function playerSelection(e) {
    playerChoice = e.target.id.toUpperCase();
    console.log(playerChoice, 'player')
    playRounds(playerChoice) 
}


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
        return "Draw " + playerChoice + " & " +  computerChoice
    }
  };

  game();
