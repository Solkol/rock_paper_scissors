function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

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
        infoDiv.textContent = 'You win! Rock beats Scissors!';
        return 1;
    } else if (!playerSelection.localeCompare('Scissors', undefined, {sensitivity: 'accent'}) && computerSelection === 'Paper') {
        infoDiv.textContent = 'You win! Scissors beats Paper!';
        return 1;
    } else if (!playerSelection.localeCompare('Paper', undefined, {sensitivity: 'accent'}) && computerSelection === 'Rock') {
        infoDiv.textContent = 'You win! Paper beats Rock!';
        return 1;
    } else if (!playerSelection.localeCompare('Scissors', undefined, {sensitivity: 'accent'}) && computerSelection === 'Rock') {
        infoDiv.textContent = 'You lost! Rock beats Scissors!';
        return 0;
    } else if (!playerSelection.localeCompare('Paper', undefined, {sensitivity: 'accent'}) && computerSelection === 'Scissors') {
        infoDiv.textContent = 'You lost! Scissors beats Paper!';
        return 0;
    } else if (!playerSelection.localeCompare('Rock', undefined, {sensitivity: 'accent'}) && (computerSelection === 'Paper')) {
        infoDiv.textContent = 'You lost! Paper beats Rock!';
        return 0;
    } else if (!playerSelection.localeCompare(computerSelection, undefined, {sensitivity: 'accent'})) {
        infoDiv.textContent = 'Draw!';
        return -1;
    }
}

function giveWinner(playerWins, computerWins) {
    if (playerWins > computerWins) {
        infoDiv.textContent = `You win the game! Result: Player ${playerWins} - Computer ${computerWins}!`;
    } else {
        infoDiv.textContent = `You lost the game! Result: Player ${playerWins} - Computer ${computerWins}!`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    const infoDiv = document.querySelector('#infoDiv');
    infoDiv.textContent = 'Make your choice! Press a button to start the game!';
    const btnDiv = document.querySelector('#buttons');

    btnDiv.addEventListener('click', (e) => {
        let target = e.target;

	    roundResult = playRound(target.id, getComputerChoice());

        if (roundResult === 1) {
            playerScore++;
        } else if (roundResult === 0) {
            computerScore++;
        }

        if (playerScore === 5 || computerScore === 5) {
            giveWinner(playerScore, computerScore);
            infoDiv.textContent = infoDiv.textContent + '\n' + 'To play again, press a button to make a choice.'
            playerScore = 0;
            computerScore = 0;
        } else {
            infoDiv.textContent = infoDiv.textContent + '\n' + `Current result is: Player ${playerScore} - Computer ${computerScore}`;
        }

    }
    );
}

game();