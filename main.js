
function getComputerChoice() {
    let array = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber <= 33) {
        return array[0];
    } else if (randomNumber <= 66) {
        return array[1];
    } else if (randomNumber <= 99) {
        return array[2];
    }
}

let result;

function playRound(playerSelection, computerSelection) {    
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        result = "You lost! Paper beats Rock";
        return "Computer";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissor") {
        result = "You Won! Rock beats Scissors";
        return "Player";
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "Draw";
    } else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection === "Rock") {
        result = "You lost! Rock beats Scissors";
        return "Computer";
    } else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection === "Paper") {
        result = "You Won! Scissors beat Paper";
        return "Player";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissor") {
        result = "You lost! Scissors beat Paper";
        return "Computer";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        result = "You Won! Paper beats Rock";
        return "Player";
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
        
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Plase Choose Rock, Paper or Scissor");
        let computerSelection = getComputerChoice();

        if (playRound(playerSelection, computerSelection) === "Player") {
            playerScore++;
            console.log(result + " Player score: " + playerScore + " Computer score: " + computerScore);

        } else if (playRound(playerSelection, computerSelection) === "Computer") {

            computerScore++;
            console.log(result + " Player score: " + playerScore + " Computer score: " + computerScore);

        } else if (playRound(playerSelection, computerSelection) === "Draw") {
            i--;

            console.log("Draw! Player score: " + playerScore + " Computer score: " + computerScore);
        }
    }

    if (playerScore > computerScore) {
        console.log("Congrats! You WON THE GAME")
    } else if (playerScore < computerScore) {
        console.log("You Lost! Good luck next time")
    } else console.log("The Game Is A Draw!")
}

game();

