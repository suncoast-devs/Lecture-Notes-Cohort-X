/* How to get the values from a card
    /  op1 create an object as a look up table */
const RANK_VALUES = {
    ace: 11,
    king: 10,
    queen: 10,
    2: 2
}

// RANK_VALUES.ace == RANK_VALUES["ace"] // true

console.log(RANK_VALUES["king"])

const deck = [
    {
        suit: "Heart",
        rank: "ace"
    }
]

const card = deck[0]

const _value = RANK_VALUES[card.rank]

// opt 2 Parallel Arrays

const suits = ["h", "c", "d", "s"];
const ranks = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k",]
const card_values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const deck = []

for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < ranks.length; r++) {
        deck.push({
            suit: suits[s],
            rank:ranks[r],
            value:card_values[r]
        })        
    }    
}

