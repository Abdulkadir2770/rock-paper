/* retrieving html elements*/
const display = document.getElementById("display");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerOption = [rock, paper, scissors];
const computerOption = ["rock", "paper", "scissors"];
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

/* verifying the player and computer scores*/
let playerScore = 1;
let computerScore = 1;


// a function that determines what the computer's choice is
const getComputerChoice = () => {
    let compChoice = Math.random() * 3;

    if(compChoice < 1) {
        return "rock";
    } else if(compChoice < 2) {
        return "scissors";
    } else if(compChoice < 3) {
        return "paper";
    }
}

let computer = getComputerChoice();
console.log(computer);

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


window.addEventListener("load", () => {
    display.innerHTML = "Choose your option!";
})

let game = playerOption.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.innerHTML);
        display.innerHTML = gameRound(element, computer);
    })
});

// the function that begins the game
for(let i = 0; i < 5; i++) {
    game;
}