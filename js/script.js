let array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)]
}

let computerSelection = getComputerChoice()

let playerSelection = prompt("Do you want to throw rock, paper, or scissors?")

function playRound() {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats scissors! You win!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beats paper! You win!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats rock! You win!")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Paper beats rock! You lose!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Scissors beats paper! You lose!")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Rock beats scissors! You lose!")
    } else if (playerSelection === computerSelection) {
        console.log(`You both picked ${playerSelection}! It's a draw!`)
    } else {
            return "Please choose rock, paper, or scissors."
    }
}