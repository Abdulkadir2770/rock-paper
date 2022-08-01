/* retrieving html elements*/
const display = document.getElementById("display");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerOption = [paper, rock, scissors];
const computerOption = ["rock", "paper", "scissors"];
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");


/* sets the player and computer scores*/
let playerScore = 1;
let computerScore = 1;

/* displays when window loads*/
window.addEventListener("load", () => {
    display.innerHTML = "Choose your option!";
})

// a function that determines what the computer's choice is
const getComputerChoice = () => {
    let compChoice = Math.random() * computerOption.length;

    if(compChoice <= 1) {
        return "rock";
    } else if(compChoice <= 2) {
        return "scissors";
    } else if(compChoice <= 3) {
        return "paper";
    }
}

let computer = getComputerChoice();
console.log(computer);

// the logic that decides who wins and loses
const gameRound = (playerSelection, computerSelection) => {
    if(playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
            pScore.innerHTML = playerScore;
            cScore.innerHTML = computerScore;
            return "It's a tie!!!";
    }  else if(playerSelection === "rock" && computerSelection === "paper")  {
            return "You lose!!!";
            cScore.innerHTML = cScore;
            cScore++;
    }  else if(playerSelection === "rock" && computerSelection === "scissors")  {
            return "You win!!!";
            pScore.innerHTML = pScore;
            pScore++;
    }  else if(playerSelection === "paper" && computerSelection === "scissors")  {
            return "You lose!!!";
            cScore.innerHTML = cScore;
            cScore++;
    }  else if(playerSelection === "paper" && computerSelection === "rock")  {
            return "You win!!!";
            pScore.innerHTML = pScore;
            pScore++;
    }  else if(playerSelection === "scissors" && computerSelection === "rock")  {
            return "You lose!!!";
            cScore.innerHTML = cScore;
            cScore++;
    }  else if(playerSelection === "scissors" && computerSelection === "paper")  {
            return "You win!!!";
            pScore.innerHTML = pScore;
            pScore++;
    }  else {
        return "Winner undecided";
    }
}

// game function
let game = () => {
    playerOption.forEach(element => {
        // event listener for when the button is clicked
        element.addEventListener("click", () => {
            display.innerHTML = gameRound(element.id, computer);
        })
    })
}

game();

// // the function that begins the game
// for(let i = 0; i <= 5; i++) {
//     game();
// }

