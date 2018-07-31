const main = () => {
  document.querySelector('h1').textContent += '?'
}

const OUTPUT_MESSAGE = 'Happy Birthday, '

const updateName = () => {
  // get the value of the input field
  const theirName = document.querySelector('#fullName').value
  // add the "happy birthday message"
  const message = OUTPUT_MESSAGE + theirName
  // enter new message into the DOM
  document.querySelector('.output').textContent = message
}

const secondFunction = () => {
  const theirName = 'this'
  console.log(theirName)
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.happyBirthdayButton').addEventListener('click', updateName)

