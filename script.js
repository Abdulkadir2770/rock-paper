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


let playerSelection = prompt();
let computerSelection = getComputerChoice();

const gameRound = (playerSelection, computerSelection) => {
    let gameStarted = true;

    switch(gameStarted) {
        case playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors":
            return "It's a tie!!!";
            break;
        case playerSelection == "rock" && computerSelection == "paper":
            return "Computer wins!!!";
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
            return "You win!!!";
            break;
        case playerSelection == "paper" && computerSelection == "scissors":
            return "Computer wins!!!"
            break;
        case playerSelection == "paper" && computerSelection == "rock":
            return "You win!!!"
            break;
        case playerSelection == "scissors" && computerSelection == "rock":
            return "Computer wins!!!"
            break;
        case playerSelection == "scissors" && computerSelection == "paper":
            return "You win!!!"
    }

}

const game = () => {
    for(let i = 0; i < 5; i++) {
        return gameRound();
    }
}

console.log(game());