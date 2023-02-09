let compWinCount;
let playerWinCount;
let count = 1;
let computerChoice = ""
let playerChoice = ""
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const btn = document.querySelector("#btn");
const finalResultPrint = document.getElementById('final-result')
const resultPrint = document.getElementById('round-result');



function game() {
    // let count = 1;
    compWinCount = 0;
    playerWinCount = 0;
    count = 1;
    rock.addEventListener('click', playerRock);
    paper.addEventListener('click', playerPaper);
    scissors.addEventListener('click', playerScissors);

    finalResultPrint.textContent = ""
    resultPrint.textContent = ""
   
    //const playerSelection = document.getElementById('player-selection');
    // getPlayerChoice()
    //console.log(playerChoice)

    
    // count += 1
    // console.log('count:', count)
    
    //let playerChoice = getPlayerChoice();
    //playerSelection = getPlayerChoice();
    //console.log(`Game number ${count}`);

    // playerSelection.textContent = `${playerChoice}`;
   
    // let roundResult = playRound(playerChoice, computerChoice);
    // resultPrint(roundResult);

    // document.getElementsByClassName("image").addEventListener("click", print_klik);
    
    // OK
}

//return choice.toUpperCase() + choice.substr(1).toLowerCase();
function resultPrint(roundResult) {
    resultPrint.textContent = `${roundResult}`
}

function finalResult() {
    finalResultPrint.textContent = `Computer: ${compWinCount} vs You: ${playerWinCount}`
}

// function playRounds() {
//     const selection = ["ROCK", "PAPER", "SCISSORS"];
//     let computerChoice = selection[Math.floor(Math.random() * selection.length)];
//     return computerChoice
// };

// function getPlayerChoice() {
//     // const rock = document.getElementById('rock');
//     // const paper = document.getElementById('paper');
//     // const scissors = document.getElementById('scissors');
//     //const playerSelection = document.getElementById('player-selection');
//     // rock.addEventListener('click', playerChoiceSelection)
//     // paper.addEventListener('click', () => {
//     //     playerChoice = paper['id'].toUpperCase();
//     //     count = gameCount(count)
//     //     playRounds(playerChoice)
//     //     paper.removeEventListener('click')
//     // })
//     // scissors.addEventListener('click', () => {
//     //     playerChoice = scissors['id'].toUpperCase();
//     //     count = gameCount(count)
//     //     playRounds(playerChoice)
//     //     scissors.removeEventListener('click')
//     // })
// }

// function checkCount(count, rock, paper, scissors) {
//     console.log(count, 'check count')
//     if (count > 5 ) {
//         rock.removeEventListener('click', playerChoiceSelection)
//     }
// }

function playerRock(event) {
    playerChoice = rock['id'].toUpperCase();
    console.log(playerChoice)
    playRounds(playerChoice) 
    // count = gameCount(count)
    // playRounds(playerChoice)
}
function playerPaper(event) {
    playerChoice = paper['id'].toUpperCase();
    console.log(playerChoice)
    playRounds(playerChoice) 
    // count = gameCount(count)
    // playRounds(playerChoice)
}
function playerScissors(event) {
    playerChoice = scissors['id'].toUpperCase();
    console.log(playerChoice)
    playRounds(playerChoice) 
    // count = gameCount(count)
    // playRounds(playerChoice)
}







// rock['id'].toUpperCase();
//     count = gameCount(count)
//     playRounds(playerChoice)
//     // rock.removeEventListener('click', toto)

// function gameCount(count) {
//     count += 1
//     console.log(count, 'gameC')
//     return count += 1 
// }
//function playRounds(){}


btn.onclick = () => game() // btn pokarze się dopiero po skończonej grze 5 rund

// function playAgain() {
//     console.log('PLAY again?')
// }

function playRounds(playerChoice) {
    const selection = ["ROCK", "PAPER", "SCISSORS"];
    computerChoice = selection[Math.floor(Math.random() * selection.length)];
    console.log(computerChoice)
    roundResult = playRound(playerChoice, computerChoice);
    resultPrint(roundResult)
    count += 1
    console.log(count)
    if (count > 5) {
        rock.removeEventListener('click', playerRock)
        paper.removeEventListener('click', playerPaper)
        scissors.removeEventListener('click', playerScissors)
        finalResult()
        //playAgain()
        
        }
};


//     for (let i=0; i < image.length; i++ ) {
//         image[i].addEventListener('click', () => {
//         playerChoice = image[i]['id'].toUpperCase();
//         playerSelection.textContent = `${playerChoice}`;
//         computerChoice = playRounds()
//         const computerSelection = document.getElementById('computer-selection');
//         computerSelection.textContent = `${computerChoice}`;
//         let roundResult = playRound(playerChoice, computerChoice);
//         resultPrint(roundResult);
//         // image.removeEventListener('click', finalResult)
//         console.log('count:', count)
//     }, {once: true}); 
//     } 
// }

// function getPlayerChoice() {
//     const image = document.getElementsByClassName('image');
//     const playerSelection = document.getElementById('player-selection'); 
//     for (let i=0; i < image.length; i++ ) {
//         image[i].addEventListener('click', () => {
//         playerChoice = image[i]['id'].toUpperCase();
//         playerSelection.textContent = `${playerChoice}`;
//         computerChoice = playRounds()
//         const computerSelection = document.getElementById('computer-selection');
//         computerSelection.textContent = `${computerChoice}`;
//         let roundResult = playRound(playerChoice, computerChoice);
//         resultPrint(roundResult);
//         // image.removeEventListener('click', finalResult)
//         console.log('count:', count)
//     }, ); 
//     } 
// }

// function finalResult() {
//     console.log(compWinCount, playerWinCount);
// }

// function gameCount(count, image) {
//     if (count > 5) {
//         image.removeEventListener('click', finalResult);
//     } else {
//         return count
//     }
// }

function playRound(playerSelection, computerChoice) {
    if ( playerSelection == "ROCK" && computerChoice == "SCISSORS" ) {
        playerWinCount += 1;
        return "You Win! ROCK beats SCISSORS."
    } else if (playerSelection == "PAPER" && computerChoice == "ROCK") {
        playerWinCount += 1;
        return "You Win! PAPER beats ROCK."
    } else if (playerSelection == "SCISSORS" && computerChoice == "PAPER") {
        playerWinCount += 1;
        return "You Win! SCISSORS beats PAPER" 
    } else if (playerSelection == "SCISSORS" && computerChoice == "ROCK" ) {
        compWinCount += 1;
        return "You Lose! ROCK beats SCISSORS."
    } else if (playerSelection == "ROCK" && computerChoice == "PAPER") {
        compWinCount += 1;
        return "You Lose! PAPER beats ROCK."
    } else if (playerSelection == "PAPER" && computerChoice == "SCISSORS") {
        compWinCount += 1;
        return "You Lose! SCISSORS beats PAPER"
    } else {
        compWinCount += 0.5;
        playerWinCount += 0.5;
        return "Draw " + playerSelection + " & " +  computerChoice
    }
  };


// function getPlayerChoice(): {
//     const images = document.getElementsByClassName('image');
//     const playerSelection = document.getElementById('player-selection'); 
//     for (let i=0; i < image.length; i++ ) {
//         image[i].addEventListener('click', () => {
//         playerSelection.textContent = `${image[i]['id']}`;
//         }
//         ;
//         });
//     }
//         return `${image[i]['id']}`
// }

    
    //.toUpperCase() + choice.substr(1).toLowerCase();
          

    // //DZIAŁA
    // const ROCK = document.querySelector('#ROCK');
    // ROCK.addEventListener('click', () => {
    // alert("Hello World");
    // });



    //images = document.getElementsByClassName("image")
    //console.log(images)
    // images.addEventListener("click"     )
    // console.log(playRound(playerSelection,   computerChoice));
    
     // console.log(`Total score: Player: ${playerWinCount} / Computer: ${compWinCount}`);
     // nextGame = prompt("Do you want to play once again? (y/n)")
     //if (nextGame == "y" || nextGame == "Y") {
     //   game()
     //}


// function print_klik() {
//     const playerSelection = document.getElementById('player-selection');
//     playerSelection.textContent = `KLIK!!`
// }



// function game() {
//     let count = 1;
//     compWinCount = 0;
//     playerWinCount = 0;
//     for (let i = 0; i < 5; i++) {
//          computerChoice = playRounds();
//         playerSelection = getPlayerChoice();
//         console.log(`Game number ${count}`);
//         count += 1;
//         console.log(playRound(playerSelection,   computerChoice));
//      }
//      console.log(`Total score: Player: ${playerWinCount} / Computer: ${compWinCount}`);
//      nextGame = prompt("Do you want to play once again? (y/n)")
//      if (nextGame == "y" || nextGame == "Y") {
//         game()
//      }
// };



// function getPlayerChoice() {
//     choice = prompt("What is your choice? ROCK, PAPER or SCISSORS?")
//     return choice[0].toUpperCase() + choice.substr(1).toLowerCase();
// };  

game();
