import { homeItems } from "./data.js";

const board = document.getElementById("board");
const shuffleBtn = document.getElementById("shuffle-btn");

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function renderBoard(items) {
  board.innerHTML = items
    .map((item) => {
      if (item.type === "image") {
        /**
         * Suggestion: add the alt text description as a visible 
         * html element (in addition to the alt text attribute, not replacing) 
         * so that users can see the description of each of the images. 
         * Perhaps it appears when user hovers over the image 
         * or always visible as a static footer on the image.
         */
        return `
          <div class="card home-image-card">
            <img src="${item.src}" alt="${item.alt ?? ""}">
          </div>
        `;
      }
      if (item.type === "link") {
        return `<div class="card p-3" style="background: ${item.color ?? '#e9e9ec'}; border: 0;">
          <h5 class="card-title mb-2">${item.title}</h5>
          <p class="card-text text-muted small mb-0"><a href="${item.href}">${item.body}</a></p>
        </div>`;
      }
      return `
        <div class="card p-3" style="background: ${item.color ?? '#e9e9ec'}; border: 0;">
          <h5 class="card-title mb-2">${item.title}</h5>
          <p class="card-text text-muted small mb-0">${item.body}</p>
        </div>
      `;
    })
    .join("");
}

renderBoard(homeItems);

shuffleBtn.addEventListener("click", () => {
  board.classList.add("is-shuffling");

  setTimeout(() => {
    renderBoard(shuffle(homeItems));
    board.classList.remove("is-shuffling");
  }, 200);
});