// alert("ello form javascript")

const selection = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

computerSelection = getComputerChoice();
console.log(computerSelection);