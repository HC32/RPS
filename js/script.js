let array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

let playerScore = 0

let computerScore = 0

let computerSelection = getComputerChoice()

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', registerClick)
});

let playerSelection;

function registerClick() {
    playerSelection = this.id;
    playRound();
}

const results = document.getElementById('results')

function declareResults() {
    if (playerScore < 5 && computerScore < 5) {
        results.textContent = `Player: ${playerScore} \n\n\n\nComputer: ${computerScore}`;
    } else if (playerScore === 5) {
        results.textContent = `Player has won 5 rounds! Player wins!`;
    } else if (computerScore === 5) {
        results.textContent = `Computer has won 5 rounds! Computer wins!`;
    }
}

function playRound() {
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        console.log(`Rock beats scissors! You win! \n Player: ${playerScore} \n Computer: ${computerScore}`);
        declareResults();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        console.log(`Scissors beats paper! You win! \n Player: ${playerScore} \n Computer: ${computerScore}`);
        declareResults();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        console.log(`Paper beats rock! You win! \n Player: ${playerScore} \n Computer: ${computerScore}`);
        declareResults();
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        console.log(`Paper beats rock! You lose! \n Player: ${playerScore} \n Computer: ${computerScore}`);
        declareResults();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        console.log(`Scissors beats paper! You lose! \n Player: ${playerScore} \n Computer: ${computerScore}`);
        declareResults();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        console.log(`Rock beats scissors! You lose! \n Player: ${playerScore} \n Computer: ${computerScore}`);
        declareResults();
    } else if (playerSelection === computerSelection) {
        console.log(`You both picked ${playerSelection}! It's a draw!  \n Player: ${playerScore} \n Computer: ${computerScore}`);
        results.textContent = `Player: ${playerScore} \n Computer: ${computerScore}`;
    } else {
        console.log(`Please choose rock, paper, or scissors. \n Player: ${playerScore} \n Computer: ${computerScore}`);
        results.textContent = `Player: ${playerScore} \n Computer: ${computerScore}`;
    }
}

function winner() {
        if (playerScore > computerScore) {
                console.log(`You win ${playerScore}-${computerScore}!`)
        } else if (playerScore < computerScore) {
                console.log(`You lose ${computerScore}-${playerScore}!`)
        } else {
                console.log(`The score is ${playerScore}-${computerScore}, it's a draw!`)
        }
}