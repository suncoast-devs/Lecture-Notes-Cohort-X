
const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 10)
}

const randomPick = generateRandomNumber()

const init = () => {
  // pick a random number between 1 and 10
  console.log('the current number is ', randomPick)
}

const updatePlayerName = () => {
  console.log('updating player name')
  const playerName = document.querySelector('.player-name-input').value
  document.querySelector('#playerName').textContent = playerName
}

const compareGuess = () => {
  console.log('comparing guess')
  // get the playerguess
  const playerGuess = parseInt(document.querySelector('.player-guess').value)
  if (playerGuess === randomPick) {
    // display success message
    console.log('success')    
  } else {
    // display nope message
    console.log('nope')
  }
}

document.addEventListener('DOMContentLoaded', init)
document.querySelector('.player-name-input').onchange = updatePlayerName
document.querySelector('#guessButton').addEventListener('click', compareGuess)