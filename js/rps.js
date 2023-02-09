let compWinCount;
let playerWinCount;
let computerChoice = ""
let playerChoice = ""
const image = document.getElementsByClassName('image');
const btn = document.querySelector("#btn");
const finalResultPrint = document.getElementById('final-result');
const roundResultPrint = document.getElementById('round-result');
const compImage = document.getElementById('comp-image');

//const imageBox = document.getElementsByClassName("image-box");
// imageBox.addEventListener("mouseleave", () => {compImage.src="./img/blank.jpg"});
//image.onmouseleave = () => {compImage.src="./img/blank.jpg"};
// imageBox.addEventListener("mouseleave", leave);


//image.addEventListener('mouseleave', leave);


function leave() {
    compImage.src="./img/blank.jpg";
}


function game() {
    compWinCount = 0;
    playerWinCount = 0;
    //imageBox.addEventListener("mouseenter", () => {compImage.src="./img/blank.jpg"});
    for (let i=0; i < image.length; i++ ) {
        image[i].addEventListener('click', playerSelection)
    }
    
    roundResultPrint.textContent = ".................."
    finalResultPrint.textContent = ".................."
	btn.onclick = null;
	btn.style.cssText = 'color: lightgrey'
	//btn.style.cssText = 'all: revert';
    // compImage.src = `./img/blank.jpg`
    // image.onmouseover = () => compImage.src=`./img/blank.jpg`

    //image.o   nmouseover = () => {compImage.src="./img/blank.jpg"}
    //image.addEventListener("mouseenter", () => {compImage.src="./img/blank.jpg"})

    //imageBox.addEventListener("mouseenter", () => {compImage.src="./img/blank.jpg"});
    //imageBox.addEventListener("mouseleave", () => {compImage.src="./img/blank.jpg"});
    

}

function computerSelection() {
    const selection = ["ROCK", "PAPER", "SCISSORS"];
    computerChoice = selection[Math.floor(Math.random() * selection.length)];
    console.log(computerChoice, 'computer');
    compImage.src = `./img/${computerChoice}.jpg`
    return computerChoice
}

function playRounds(playerChoice) {
    // const selection = ["ROCK", "PAPER", "SCISSORS"];
    // computerChoice = selection[Math.floor(Math.random() * selection.length)];
    // console.log(computerChoice, 'computer')

    
    computerChoice = computerSelection();
    roundResult = winner(playerChoice, computerChoice);
    roundResultPrint.textContent = `${roundResult}`
	finalResultPrint.textContent = `You: ${playerWinCount} vs Computer: ${compWinCount}`
	//console.log(compWinCount, playerWinCount)
    if (compWinCount >= 5 || playerWinCount >= 5) {
        for (let i=0; i < image.length; i++ ) {
            image[i].removeEventListener('click', playerSelection)
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
