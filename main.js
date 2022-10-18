const roundResult = document.querySelector('.result p');
const finalResult = document.querySelector('.final-result')
const buttons = document.querySelectorAll('.btn');
let playerScore = 0;
let computerScore = 0;

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

function checkForWinner (playerScore, computerScore) {
    if(playerScore === 5){
        finalResult.textContent = "CONGRATS! YOU WON THE GAME";
    } else if (computerScore === 5) {
        finalResult.textContent = "You Lost! Good Luck Next Time";
    }
}
 
function playRound(playerSelection, computerSelection) {
    if(playerScore === 5 || computerScore === 5) {
        return;    
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        computerScore++
        roundResult.textContent = `You lost! Paper beats Rock, SCORE|| Player: ${playerScore}  Computer: ${computerScore}`;
        return "Computer";        
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissor") {
        playerScore++
        roundResult.textContent = `You Won! Rock beats Scissors, SCORE|| Player: ${playerScore}  Computer: ${computerScore}`;        
        return "Player";
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        roundResult.textContent = `Draw!, SCORE|| Player: ${playerScore}  Computer: ${computerScore}`;
        return "Draw";
    } else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection === "Rock") {
        computerScore++
        roundResult.textContent = `You lost! Rock beats Scissors, SCORE|| Player: ${playerScore}  Computer: ${computerScore}`;       
        return "Computer";
    } else if (playerSelection.toUpperCase() === "SCISSOR" && computerSelection === "Paper") {
        playerScore++
        roundResult.textContent = `You Won! Scissors beat Paper, SCORE|| Player: ${playerScore}  Computer: ${computerScore}`;         
        return "Player";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissor") {
        computerScore++
        roundResult.textContent = `You lost! Scissors beat Paper, SCORE|| Player: ${playerScore}  Computer: ${computerScore}`; ;        
        return "Computer";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        playerScore++
        roundResult.textContent = `You Won! Paper beats Rock, SCORE|| Player: ${playerScore}  Computer: ${computerScore}`;        
        return "Player";
    } 
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {  
    playRound(e.target.textContent, getComputerChoice());
    checkForWinner(playerScore, computerScore); 
    });
});

