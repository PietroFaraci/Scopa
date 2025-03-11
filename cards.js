const SUITS = ["swords", "cups", "coins", "clubs"];
const VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function createDeck() {

  let deck = []

  for (let i = 0; i < SUITS.length; i++) {
    for (let n = 0; n < VALUES.length; n++) {
      let card = {suit: SUITS[i], value: VALUES[n]} 
      deck.push(card)

    }
  }
  return deck
}

deckOfCards = createDeck();
console.log(deckOfCards)
