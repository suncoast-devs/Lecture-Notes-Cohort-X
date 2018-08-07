const main = () => {
  document.querySelector('h1').textContent += '?'
}

const searchAPI = () => {
  const userInput = document.querySelector('.input').value

  console.log(userInput)

  const _url = 'https://swapi.co/api/people/?search=' + userInput

  fetch(_url)
    .then(resp => {
      console.log("response = ", resp)
      if ( resp.status === 200){
        return resp.json()
      } else {
        console.log("err", resp)
      }
    }).then(searchResults => {
      console.log("search results = ", searchResults)
      const parent = document.querySelector('.searchResults')
      searchResults.results.forEach(person => {
        const li = document.createElement('li')
        li.textContent = person.name
        parent.appendChild(li)
      });
    })
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.input').addEventListener('blur', searchAPI)