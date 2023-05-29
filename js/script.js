let array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)]
}

let computerSelection = getComputerChoice()

let playerSelection = getPlayerChoice()

function getPlayerChoice() {
    return prompt("Do you want to throw rock, paper, or scissors?")
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            return "You win!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            return "You win!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            return "You win!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            return "You lose!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            return "You lose!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            return "You lose!"
    } else if (playerSelection.toLowerCase() === computerSelection) {
            return "It's a draw!"
    } else {
            return "Please choose rock, paper, or scissors."
    }
}