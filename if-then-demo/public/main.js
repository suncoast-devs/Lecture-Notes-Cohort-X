// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)

const updatePlayerName = () => {
  console.log('updating player name')
  const playerName = document.querySelector('.player-name-input').value
  document.querySelector('#playerName').textContent = playerName

}

document.querySelector('.player-name-input').onchange = updatePlayerName
