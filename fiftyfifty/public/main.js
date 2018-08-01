const bucket = []

const main = () => {
  document.querySelector('h1').textContent += '?'
}

const addNameToBucket = () => {
  const name = document.querySelector('#nameTextbox').value
  console.log('adding ' + name + ' to bucket')
  bucket.push(name)
  console.log(bucket)
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('#addNameToBucketButton').addEventListener('click', addNameToBucket)