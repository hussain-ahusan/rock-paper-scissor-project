const choiceBtns = document.querySelectorAll('button')
choiceBtns.forEach(button => button.addEventListener('click', (e) => {
    console.log(checkWinner(button.id, computerPlay()))
}))

function computerPlay () {
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = choices [Math.floor(Math.random() * choices.length)]
    return randomChoice
}

function checkWinner (player, computer) {
    if (
        (player === "rock" && computer === "scissor") ||
        (player === "scissor" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return `You won! ${player} beats ${computer}`
    } else if (
        (computer === "rock" && player === "scissor") ||
        (computer === "scissor" && player === "paper") ||
        (computer === "paper" && player === "rock")
    ) {
        return `You lose! ${computer} beats ${player}`
    } else {
        return `It's a draw!`
    }
}

function roundResult (player, computer) {
    const result = checkWinner(player, computer)

    if (result === `You won! ${player} beats ${computer}`) {
        return playerScore++
    } else if (result === `You lose! ${computer} beats ${player}`) {
        return computerScore++
    }
}