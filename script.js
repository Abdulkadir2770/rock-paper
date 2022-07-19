const gameRound = (playerSelection, computerSelection) => {
    return "You win! paper beats rock";
}

const getComputerChoice = () => {
    let compChoice = Math.random();
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

console.log(gameRound(playerSelection));