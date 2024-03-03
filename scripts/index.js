import generateReviewers from "./generateReviewers.js";

let cards = document.querySelector(".cards__wrapper");
let chevLeft = document.getElementById("cards__navigation--chevron-left");
let chevRight = document.getElementById("cards__navigation--chevron-right");

let cardWidth;
let currentCard = 0;
let cardIndex = 0;
let divisor;

function checkContainerWidth() {
  const containerWidth = cards.clientWidth;
  if (containerWidth == 350) {
    divisor = 1;
  } else if (containerWidth == 700) {
    divisor = 2;
  } else {
    divisor = 3;
  }
}

function checkCarouselEdge() {
  checkContainerWidth();
  if (currentCard == 0) {
    chevLeft.disabled = true;
    chevRight.disabled = false;
  } else if (currentCard == cards.children.length - divisor) {
    chevRight.disabled = true;
    chevLeft.disabled = false;
  } else {
    chevRight.disabled = false;
    chevLeft.disabled = false;
  }
}

generateReviewers(cards);
document.addEventListener("DOMContentLoaded", () => {
  let card = document.querySelectorAll(".card");
  cardWidth = card[0]?.clientWidth + 10;
  checkCarouselEdge();
});

chevRight.addEventListener("click", (event) => {
  currentCard++;
  --cardIndex;
  checkCarouselEdge();
  cards.scrollLeft += cardWidth;
});
chevLeft.addEventListener("click", () => {
  currentCard--;
  ++cardIndex;
  checkCarouselEdge();
  cards.scrollLeft -= cardWidth;
});
