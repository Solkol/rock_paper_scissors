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
        console.log('You win! Rock beats Scissors');
        return 1;
    } else if (!playerSelection.localeCompare('Scissors', undefined, {sensitivity: 'accent'}) && computerSelection === 'Paper') {
        console.log('You win! Scissors beats Paper');
        return 1;
    } else if (!playerSelection.localeCompare('Paper', undefined, {sensitivity: 'accent'}) && computerSelection === 'Rock') {
        console.log('You win! Paper beats Rock');
        return 1;
    } else if (!playerSelection.localeCompare('Scissors', undefined, {sensitivity: 'accent'}) && computerSelection === 'Rock') {
        console.log('You lost! Rock beats Scissors');
        return 0;
    } else if (!playerSelection.localeCompare('Paper', undefined, {sensitivity: 'accent'}) && computerSelection === 'Scissors') {
        console.log('You lost! Scissors beats Paper');
        return 0;
    } else if (!playerSelection.localeCompare('Rock', undefined, {sensitivity: 'accent'}) && (computerSelection === 'Paper')) {
        console.log('You lost! Paper beats Rock');
        return 0;
    } else if (!playerSelection.localeCompare(computerSelection, undefined, {sensitivity: 'accent'})) {
        console.log('Draw!');
        return -1;
    }
}

function giveWinner(playerWins, computerWins) {
    if (playerWins > computerWins) {
        console.log(`You win the game! Result: Player ${playerWins} - Computer ${computerWins}`);
    } else {
        console.log(`You lost the game! Result: Player ${playerWins} - Computer ${computerWins}`);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let roundResult;
    
    while (playerScore !== 5 || computerScore !== 5) {
        playerSelection = prompt('Enter a choice: Rock, Paper or Scissors?');
        computerSelection = getComputerChoice();

        roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 1) {
            playerScore++;
        } else if (roundResult === 0) {
            computerScore++;
        }
    }
}

console.log(playRound(playerSelection, computerSelection));