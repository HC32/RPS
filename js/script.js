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
            alert("You win!")
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            alert("You win!")
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            alert("You win!")
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            alert("You lose!")
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            alert("You lose!")
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            alert("You lose!")
    } else if (playerSelection.toLowerCase() === computerSelection) {
            alert("It's a draw!")
    } else {
            alert("Please choose rock, paper, or scissors.")
    }
}