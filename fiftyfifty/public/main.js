const bucket = []
let winnerWasSelected = false

const main = () => {
  document.querySelector('h1').textContent += '?'
}

const getCurrentTotalFromBucket = () => {
  let total = 0
  for (let i = 0; i < bucket.length; i++) {
    const individualBuyer = bucket[i];
    total +=individualBuyer.amountPaid
    // ^ shortcut for total = total + individualBuyer.amountPaid
  }
  return total
}

const updateTotalForPotInHTML = () => {
  document.querySelector('#currentTotal').textContent = getCurrentTotalFromBucket()
}

const addNameToBucket = () => {
  const bucketList = document.querySelector('#bucketList')
  if (winnerWasSelected) {
    // reset the bucket
    bucket.splice(0, bucket.length)
    bucketList.textContent = ''
    winnerWasSelected = false
    document.querySelector('.winner').textContent = ''
  }

  const _ticketsBought = parseInt(document.querySelector("#numberOfTicketsBoughtBox").value)
  const buyer = {
    name: document.querySelector('#nameTextbox').value,
    ticketsBought: _ticketsBought,
    amountPaid: _ticketsBought * 5
  }
  console.log(buyer)
  bucket.push(buyer)
  console.log(bucket)
  const li = document.createElement('li')

  li.textContent = buyer.name
  // add the class
  li.classList.add('raffle-contestant')
  bucketList.appendChild(li)
  document.querySelector('#nameTextbox').value = ''

  updateTotalForPotInHTML()
}



const selectWinner = () => {
  // randomly pick from array the winner
  const winner = bucket[Math.floor(Math.random() * bucket.length)]
  console.log(winner)
  // display the winner
  // say how much money they won
  document.querySelector('.winner').textContent = winner + ' has won $' + ((bucket.length * 5) / 2).toFixed(2)
  winnerWasSelected = true
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('#addNameToBucketButton').addEventListener('click', addNameToBucket)
document.querySelector('.announceWinner').addEventListener('click', selectWinner)
