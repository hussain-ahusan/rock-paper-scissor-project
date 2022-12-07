const options = ["rock", "paper", "scissor"];

function getComputerChoice () {
    const choice = options [Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie!`;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "scissor" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return `player`;
    } else {
        return `computer`;
    }
}

function playRound (playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == `It's a tie!`) {
        return `We have a tie!`;
    } else if (result == `player`) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice () {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock Paper Scissor");

        if (choice == null) {
            continue;
        }

        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log( playRound (playerSelection, computerSelection) );
        console.log(`--------------`);
        if (checkWinner(playerSelection, computerSelection) == `player`) {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == `computer`) {
            computerScore++;
        }
    }

    console.log(`Final result`)

    if (playerScore > computerScore) {
        console.log(`Player is the winner!`);
    } else if (playerScore < computerScore) {
        console.log(`Computer is the winner!`);
    } else {
        console.log(`We have a tie, no one won!`);
    }


}

game();
