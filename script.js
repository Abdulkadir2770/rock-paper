// a function that determines what the computer's choice is
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

// the logic that decides who wins and loses
const gameRound = (playerSelection, computerSelection) => {
    if(playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
            return "It's a tie!!!";
    }  else if(playerSelection === "rock" && computerSelection === "paper")  {
            return "Computer wins!!!";
    }  else if(playerSelection === "rock" && computerSelection === "scissors")  {
            return "You win!!!";
    }  else if(playerSelection === "paper" && computerSelection === "scissors")  {
            return "Computer wins!!!";
    }  else if(playerSelection === "paper" && computerSelection === "rock")  {
            return "You win!!!";
    }  else if(playerSelection === "scissors" && computerSelection === "rock")  {
            return "Computer wins!!!";
    }  else if(playerSelection === "scissors" && computerSelection === "paper")  {
            return "You win!!!";
    }  else {
        return "Winner undecided";
    }
}

// the function that begins the game
for(let i = 0; i < 5; i++) {
    
    // prompts the user & computer to pick rock, paper or scissors
    let playerSelection = prompt();
    let computerSelection = getComputerChoice();

    console.log(gameRound(playerSelection, computerSelection));
}
