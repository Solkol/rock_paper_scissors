function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (!playerSelection.localeCompare('Rock', undefined, {sensitivity: 'accent'}) && (computerSelection === 'Scissors')) {
        return 'You win! Rock beats Scissors';
    } else if (!playerSelection.localeCompare('Scissors', undefined, {sensitivity: 'accent'}) && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    } else if (!playerSelection.localeCompare('Paper', undefined, {sensitivity: 'accent'}) && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock';
    } else if (!playerSelection.localeCompare('Scissors', undefined, {sensitivity: 'accent'}) && computerSelection === 'Rock') {
        return 'You lost! Rock beats Scissors';
    } else if (!playerSelection.localeCompare('Paper', undefined, {sensitivity: 'accent'}) && computerSelection === 'Scissors') {
        return 'You lost! Scissors beats Paper';
    } else if (!playerSelection.localeCompare('Rock', undefined, {sensitivity: 'accent'}) && (computerSelection === 'Paper')) {
        return 'You lost! Paper beats Rock';
    } else if (!playerSelection.localeCompare(computerSelection, undefined, {sensitivity: 'accent'})) {
        return 'Draw!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    
    while (playerScore !== 5 || computerScore !== 5) {
        playerSelection = prompt('Enter a choice: Rock, Paper or Scissors?');
        computerSelection = getComputerChoice();
    }
}

console.log(playRound(playerSelection, computerSelection));