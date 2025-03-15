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
function printCards(deck) {
  const container = document.querySelector(".card-container");

  for (let singleCard of deck) {
    const card = document.createElement("div");

    if (singleCard.suit == "swords") {
      card.classList.add("swords-card");
    } else if (singleCard.suit == "cups") {
      card.classList.add("cups-card");
    } else if (singleCard.suit == "coins") {
      card.classList.add("coins-card");
    } else if (singleCard.suit == "clubs") {
      card.classList.add("clubs-card");
    }

    card.textContent = singleCard.value + " " + singleCard.suit;
    console.log(singleCard);
    container.appendChild(card);
  }
}
function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck;
}

let shuffledDeck = shuffle(createDeck())

printUserHand(shuffledDeck)

function printUserHand(deck) {
  const humanCardContainer = document.querySelector('.human-cards-container')
   
  // for elements in deck[]
    
  for (let card of deck.slice(0, 3)) {

    const humanCard = document.createElement('div')
    
    humanCard.classList.add('human-card')
    
    humanCard.textContent = card.value + ' ' + card.suit

    humanCardContainer.appendChild(humanCard)
  }    
}
  
  // pull three cards off the top of the deck


  //* function to print 3 cards at the BOS for the user

function printComputerHand() {
  const computerCardContainer = document.querySelector('.computer-cards-container')

  // for elements in deck[]
  

  // pull three cards off the top of the deck
  

  //* function to print 3 cards at TOS for the computer
}












