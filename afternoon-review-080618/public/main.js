const main = () => {
  document.querySelector('h1').textContent += '?'

}

let globalCounter = 0

const addOne = () => {
  globalCounter++
  document.querySelector('.dom-counter').textContent = globalCounter
  // logic to hide buttons
  if (globalCounter >= 5) {
    // hide +1 button, add the hide class
    document.querySelector('.upCounterButton').classList.add('hide')
    // show -1 button, remove the hide class
    document.querySelector('.downCounterButton').classList.remove('hide')
  }

  const cardUrl = "./images/card-" + card.value + "_" + card.rank +".png"

  const _img = document.createElement('img')
  _img.setAttribute('src', cardUrl)
  document.querySelector(".parent").appendChild(_img)
}

const removeOne = () => {
  globalCounter--
  document.querySelector('.dom-counter>h4').textContent = globalCounter
}

const resetState = () => {
  globalCounter = 0
  document.querySelector('.dom-counter').textContent = globalCounter
}

// const calcuateEndGame = () => {

//   let playerTotal = getPlayerTotal()
//   let dealerToal = getDealerTotal()

//   if (dealerToal == true)

// }

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.upCounterButton').addEventListener('click', addOne)
document.querySelector('.downCounterButton').addEventListener('click', removeOne)
