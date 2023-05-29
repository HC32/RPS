function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)]
}

let computerSelection = getComputerChoice()

let playerSelection = prompt("Do you want to throw rock, paper, or scissors?")