let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function to get a random choice for computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play one round
function playRound(humanChoice) {
    const human = humanChoice.toLowerCase();
    const computer = getComputerChoice();

    let result = "";

    if (human === computer) {
        result = `It's a tie! You both chose ${human}`;
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        result = `You win! ${human} beats ${computer}`;
    } else {
        computerScore++;
        result = `You lose! ${computer} beats ${human}`;
    }

    roundsPlayed++;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result").textContent = result;

    if (roundsPlayed === 5) {
        declareWinner();
    }
}

// Function to declare final winner after 5 rounds
function declareWinner() {
    let finalMessage = "";
    if (humanScore > computerScore) {
        finalMessage = "🎉 You won the game!";
    } else if (computerScore > humanScore) {
        finalMessage = "💻 Computer won the game!";
    } else {
        finalMessage = "🤝 It's a draw!";
    }
    document.getElementById("result").textContent = finalMessage;
}pwd
.exit
