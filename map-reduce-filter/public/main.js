const deck = []

const main = () => {
  const suits = ["h", "d", "c", "s"];
  const ranks = [
    { display: 'A', value: 11 },
    { display: 'K', value: 10 },
    { display: 'Q', value: 10 },
    { display: 'J', value: 10 },
    { display: '9', value: 9 },
  ]

  suits.forEach(suit => {
    ranks.forEach((rank) => {
      deck.push({
        suit: suit,
        rank: rank.display,
        value: rank.value
      })
    })
  })

  console.log(deck)
  // 
  const lis = deck
    .map(convertCardToLi)
  
  lis.forEach(addCardToDeckList)

  // past here, i dont care about lis
  // filter & reduce
  const sum = deck.filter(card => {
    return card.value < 10
  }).reduce((total, card ) => {
    return total += card.value
  }, 0)

  document.querySelector('.sum').textContent = sum
}

const convertCardToLi = (card) => {
  const rv = document.createElement("li")
  rv.textContent = card.rank + " of " + card.suit
  return rv
}

const addCardToDeckList = (li) => {
  document.querySelector(".deck").appendChild(li)

}

const showOnlyKings = () => {
  document.querySelector('.deck').textContent = ''
  deck.filter(card => {
    return card.rank === 'K'
  }).map(convertCardToLi).forEach(addCardToDeckList)
}

const othermain = () => {

  fetch("https://swapi.co/api/people/6").then(resp => {console.log({resp}); return resp.json()}).then(json => {
    console.log(json)
  })
}


document.addEventListener('DOMContentLoaded', othermain)
document.querySelector(".kingsOnlyButton").addEventListener('click', showOnlyKings)



// const allFuncs = (item) => {
//   func1(item)
//   func2(item)
//   func3(item)
// }

// arr.map(allFuncs)