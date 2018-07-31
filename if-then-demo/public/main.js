
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
  // returing the number guess or NaN(falsy)
  const playerGuess = parseInt(document.querySelector('.player-guess').value)
  // TODO: check if the entered a number
  // validate for:
  // if the number is whole number
  // if its a letter (or a number)
  // if its in the range 
  
  // make sure that the guess is a number
  if (playerGuess && playerGuess <= 10 && playerGuess >= 1) {
    if (playerGuess === randomPick) {
      // display success message
      console.log('success')
      const newLi = document.createElement('li')
      newLi.textContent = 'Success!!!!'
      // clear the list, then add success
      const parent = document.querySelector('#output')
      parent.textContent = ''
      parent.appendChild(newLi)
    } else {
      // display nope message
      console.log('nope')
      // create a li, that has teh text "try again" add it to the html
      // TODO: tell the user if their guess is too high or tooooo low
      const newLi = document.createElement('li')
      if (playerGuess > randomPick) {
        // too high
        newLi.textContent = playerGuess + ' is too high'
      } else {
        // by default, its too low
        newLi.textContent = playerGuess + ' is too low'
      }
      document.querySelector('#output').appendChild(newLi)
    }
  } else {
    const newLi = document.createElement('li')
    newLi.textContent = 'Try again, with a number in the range 1 to 10'
    document.querySelector('#output').appendChild(newLi)

  }
}

document.addEventListener('DOMContentLoaded', init)
document.querySelector('.player-name-input').onchange = updatePlayerName
document.querySelector('#guessButton').addEventListener('click', compareGuess)