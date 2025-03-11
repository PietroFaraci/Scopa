const SUITS = ["swords", "cups", "coins", "clubs"];
const VALUES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function createDeck() {
  let deck = [];

  for (let i = 0; i < SUITS.length; i++) {
    for (let n = 0; n < VALUES.length; n++) {
      let card = { suit: SUITS[i], value: VALUES[n] };
      deck.push(card);
    }
  }
  return deck;
}

function printCards() {
  const container = document.querySelector(".card-container");

  for (let singleCard of createDeck()) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.textContent = singleCard.value + singleCard.suit;
    console.log(singleCard);
    container.appendChild(card);
  }
}

printCards();
