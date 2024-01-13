const roundResult = document.querySelector('#result')
const userPoints = document.querySelector('#player-score')
const computerPoints = document.querySelector('#computer-score')

const choiceBtns = document.querySelectorAll('button')
choiceBtns.forEach(button => button.addEventListener('click', (e) => {
    const result = playRound(button.id, computerPlay())
    roundResult.textContent = result
    console.log(checkWinner())
}))

function computerPlay () {
    const choices = ['rock', 'paper', 'scissor']
    const randomChoice = choices [Math.floor(Math.random() * choices.length)]
    return randomChoice
}

let playerScore = 0
let computerScore = 0
function playRound (player, computer) {
    if (
        (player === "rock" && computer === "scissor") ||
        (player === "scissor" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        playerScore++
        userPoints.textContent = `Player score is ${playerScore}`
        return `You won! ${player} beats ${computer}`
    } else if (
        (computer === "rock" && player === "scissor") ||
        (computer === "scissor" && player === "paper") ||
        (computer === "paper" && player === "rock")
    ) {
        computerScore++
        computerPoints.textContent = `Computer score is: ${computerScore}`
        return `You lose! ${computer} beats ${player}`
    } else {
        return `It's a draw!`
    }
}

function checkWinner () {
    let player = playerScore
    let computer = computerScore
    if (player === computer) {
        console.log('It\'s a draw!')
    } else if (player > computer) {
        console.log(`Player is the winner!`)
    } else {
        console.log('Computer is the winner!')
    }
}
