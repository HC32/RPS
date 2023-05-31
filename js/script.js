let array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return array[Math.floor(Math.random() * array.length)]
}



let playerScore = 0

let computerScore = 0

function playRound() {
        let playerSelection = prompt("Do you want to throw rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        console.log(`Rock beats scissors! You win! \n Player: ${playerScore} \n Computer: ${computerScore}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        console.log(`Scissors beats paper! You win! \n Player: ${playerScore} \n Computer: ${computerScore}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        console.log(`Paper beats rock! You win! \n Player: ${playerScore} \n Computer: ${computerScore}`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        console.log(`Paper beats rock! You lose! \n Player: ${playerScore} \n Computer: ${computerScore}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        computerScore += 1;
        console.log(`Scissors beats paper! You lose! \n Player: ${playerScore} \n Computer: ${computerScore}`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        console.log(`Rock beats scissors! You lose! \n Player: ${playerScore} \n Computer: ${computerScore}`);
    } else if (playerSelection === computerSelection) {
        console.log(`You both picked ${playerSelection}! It's a draw!  \n Player: ${playerScore} \n Computer: ${computerScore}`);
    } else {
        console.log(`Please choose rock, paper, or scissors. \n Player: ${playerScore} \n Computer: ${computerScore}`);
    }
}

function game() {
        for (let i = 0; i < 5; i++) {
                playRound()
        }
}