import data from "/assets/data/reviews.json" assert { type: "json" };

export default function generateReviewers(parent) {
  const reviewCard = document.createDocumentFragment();

  data.forEach((person) => {
    const article = reviewCard.appendChild(document.createElement("article"));
    article.classList.add("card");
    const comment = article.appendChild(document.createElement("p"));
    const reviewer = article.appendChild(document.createElement("div"));
    reviewer.classList.add("card__reviewer");
    const reviewer_info = reviewer.appendChild(document.createElement("div"));
    const reviewer_pfp = reviewer.appendChild(document.createElement("img"));
    comment.textContent = person.comment;
    reviewer_info.appendChild(document.createElement("p")).textContent = person.name;
    reviewer_info.appendChild(document.createElement("span")).textContent = person.product;
    reviewer_pfp.src = person.image_source;
    reviewer_pfp.alt = person.image_alt;
  });

  document.addEventListener("DOMContentLoaded", () => parent.appendChild(reviewCard));
}
