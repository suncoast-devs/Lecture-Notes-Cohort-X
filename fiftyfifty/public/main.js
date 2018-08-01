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
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('#addNameToBucketButton').addEventListener('click', addNameToBucket)