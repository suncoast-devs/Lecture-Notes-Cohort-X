const BASE_URL = 'https://swapi.co/api/'


const weatherKey = () => {
  const key = '5c418bd61b262dfeab5ee02852a70c07'
  const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/'
  const _zip = 33626
  const _url = `${WEATHER_BASE_URL}forecast?appid=${key}&zip=${_zip}`
  return weatherKey

}

const main = () => {
  document.querySelector('h1').textContent += '?'
}

const displayErrorMessage = (resp) => {
  // TODO: fill in later....
  console.log('oops', resp)
}

const search = (event) => {
  // stops the form from refreshing the page
  event.preventDefault()
  console.log('searching')
  console.log(event)
  // get the search term
  const needle = document.querySelector('.searchTerm').value
  // build URL
  const _url = `${BASE_URL}starships?search=${needle}`
  fetch(weatherKey())
    .then(resp => {
      if (resp.status === 200) {
        return resp.json()
      } else {
        displayErrorMessage(resp)
      }
    })
    .then(list => {
      console.log(list)
    })
  // make the fetch request
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('.search').addEventListener('submit', search)
