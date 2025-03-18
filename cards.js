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
function printGlobalCards(deck) {
  const container = document.querySelector(".card-container");

  for (let card of deck.splice(0, 4)) {
    const globalCard = document.createElement("div");

    if (card.suit == "swords") {
      globalCard.classList.add("swords-card");
    } else if (card.suit == "cups") {
      globalCard.classList.add("cups-card");
    } else if (card.suit == "coins") {
      globalCard.classList.add("coins-card");
    } else if (card.suit == "clubs") {
      globalCard.classList.add("clubs-card");
    }

    globalCard.textContent = card.value + " " + card.suit;
    container.appendChild(globalCard);
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

function printUserHand(deck) {
  const humanCardContainer = document.querySelector(".human-cards-container");

  for (let card of deck.splice(0, 3)) {
    const humanCard = document.createElement("div");

    if (card.suit == "swords") {
      humanCard.classList.add("swords-card");
    } else if (card.suit == "cups") {
      humanCard.classList.add("cups-card");
    } else if (card.suit == "coins") {
      humanCard.classList.add("coins-card");
    } else if (card.suit == "clubs") {
      humanCard.classList.add("clubs-card");
    }

    humanCard.textContent = card.value + " " + card.suit;
    humanCardContainer.appendChild(humanCard);
  }
}
function printComputerHand(deck) {
  const computerCardContainer = document.querySelector(
    ".computer-cards-container",
  );

  for (let card of deck.splice(0, 3)) {
    const computerCard = document.createElement("div");
    if (card.suit == "swords") {
      computerCard.classList.add("swords-card");
    } else if (card.suit == "cups") {
      computerCard.classList.add("cups-card");
    } else if (card.suit == "coins") {
      computerCard.classList.add("coins-card");
    } else if (card.suit == "clubs") {
      computerCard.classList.add("clubs-card");
    }

    computerCard.textContent = card.value + " " + card.suit;
    computerCardContainer.appendChild(computerCard);
  }
}

function setupGame(deck) {
  printGlobalCards(deck);
  printUserHand(deck);
  printComputerHand(deck);
}

setupGame(shuffle(createDeck()));

