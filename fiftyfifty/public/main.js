const bucket = []
let winnerWasSelected = false

const main = () => {
  document.querySelector('h1').textContent += '?'
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
  const name = document.querySelector('#nameTextbox').value
  console.log('adding ' + name + ' to bucket')
  bucket.push(name)
  console.log(bucket)
  const li = document.createElement('li')
  li.textContent = name
  // add the class
  li.classList.add('raffle-contestant')
  bucketList.appendChild(li)
  document.querySelector('#nameTextbox').value = ''

  document.querySelector('#currentTotal').textContent = bucket.length * 5

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
