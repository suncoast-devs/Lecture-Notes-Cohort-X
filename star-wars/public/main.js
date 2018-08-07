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
        
        const _name = document.createElement('h4')
        _name.textContent = person.name
        
        const _eyeColor = document.createElement('h6')
        _eyeColor.textContent = "eyes:" + person.eye_color
        li.appendChild(_name).appendChild(_eyeColor)
        
        const _hairColor  = person.hair_color.split(',').pop().trim()
        li.classList.add(_hairColor)
        parent.appendChild(li)
      });
    })
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.input').addEventListener('blur', searchAPI)