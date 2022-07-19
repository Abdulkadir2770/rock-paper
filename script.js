const getComputerChoice = () => {
    let compChoice = Math.random();

    if(compChoice > 0.5) {
        return "Rock";
    } else if(compChoice < 0.5) {
        return "scissors";
    } else if(compChoice == 0) {
        return "paper";
    }
}

let playerSelection = prompt();;
let computerSelection = getComputerChoice();

const gameRound = (playerSelection, computerSelection) => {
    if(playerSelection)
}

const game = () => {
    for(let i = 0; i < 5; i++) {
        return gameRound();
    }
}

console.log(game())