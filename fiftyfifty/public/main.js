const bucket = []

const main = () => {
  document.querySelector('h1').textContent += '?'
}

const addNameToBucket = () => {
  const name = document.querySelector('#nameTextbox').value
  console.log('adding ' + name + ' to bucket')
  bucket.push(name)
  console.log(bucket)
  const li = document.createElement('li')
  li.textContent = name
  // add the class
  li.classList.add('raffle-contestant')
  document.querySelector('#bucketList').appendChild(li)
  document.querySelector('#nameTextbox').value = ''

  document.querySelector('#currentTotal').textContent = bucket.length * 5

}

const selectWinner = () => {
  // randomly pick from array the winner
  const winner = bucket[Math.floor(Math.random() * bucket.length)]
  console.log(winner)
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('#addNameToBucketButton').addEventListener('click', addNameToBucket)
document.querySelector('.announceWinner').addEventListener('click', selectWinner)