class Person {
  constructor(characteristics) {
    this.characteristics = characteristics
  }

  render() {
    const person = this.characteristics
    const li = document.createElement('li')

    const _name = document.createElement('h4')
    _name.textContent = person.name

    const _eyeColor = document.createElement('h6')
    _eyeColor.textContent = "eyes:" + person.eye_color
    li.appendChild(_name).appendChild(_eyeColor)

    const _hairColor = person.hair_color.split(',').pop().trim()
    li.classList.add(_hairColor)
    return li
  }
}

class Planet {
  constructor(characteristics) {
    this.characteristics = characteristics
  }

  render() {
    const planet = this.characteristics
    console.log(this.characteristics)

    const li = document.createElement('li')
    const _name = document.createElement('h4')
    _name.textContent = planet.name
    li.appendChild(_name)
    return li
  }
}

class Search {
  constructor(searchTerm, endPoint, itemRenderFunction) {
    this.searchTerm = searchTerm
    this.searchUrl = `https://swapi.co/api/${endPoint}/?search=${searchTerm}`
    // this.searchUrl = 'https://swapi.co/api/'+endPoint+'/?search=' + searchTerm
    this.itemRenderFunction = itemRenderFunction
  }

  getSearchResults() {
    fetch(this.searchUrl)
      .then(resp => {
        console.log("response = ", resp)
        if (resp.status === 200) {
          return resp.json()
        } else {
          console.log("err", resp)
        }
      }).then(searchResults => {
        console.log("search results = ", searchResults)
        const parent = document.querySelector('.searchResults')
        parent.textContent = ''
        searchResults.results.forEach(result => {
          this.itemRenderFunction(result, parent)
        });
      })
  }
}

const searchByNameEvent = () => {
  const userInput = document.querySelector('.input-name').value
  const apiSearch = new Search(userInput, "people", (result, parent) => {
    const item = new Person(result)
    parent.appendChild(item.render())
  })
  apiSearch.getSearchResults()
}

const searchByPlanetEvent = () => {
  const userInput = document.querySelector('.input-planet').value
  const apiSearch = new Search(userInput, 'planets', (result, parent) => {
    const item = new Planet(result)
    parent.appendChild(item.render())
  })
  apiSearch.getSearchResults()
}

document.querySelector('.input-name').addEventListener('blur', searchByNameEvent)
document.querySelector('.input-planet').addEventListener('blur', searchByPlanetEvent)
// document.querySelector('.input-vehicle').addEventListener('blur', searchByVehicleEvent)