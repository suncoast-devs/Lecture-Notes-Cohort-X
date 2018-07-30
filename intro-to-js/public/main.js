
const firstName = 'Winnie'

const lastName = 'The Pooh'

console.log(firstName)

console.log(lastName)

const main = () => {
  document.querySelector('h1').textContent += '?'

  // let total = 2 + 2

  // total = total + 2  is the same as total += 2
}

const buttonClickEvent = () => {
  console.log('button was click')
  // PROBLEM: we want to get the current count, add 1 to the count, update the DOM

  // query the DOM for the current value
  const currentValue = parseInt(document.querySelector('#output').textContent)

  // add 1 to it
  // currentValue += 1 Does not work because types :-(
  const newValue = currentValue + 1 

  // put the new value back into the DOM
  document.querySelector('#output').textContent = newValue
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.my-button').addEventListener('click', buttonClickEvent)
