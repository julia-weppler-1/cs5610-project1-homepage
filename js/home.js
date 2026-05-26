import { homeItems } from "./data.js";

const board = document.getElementById("board");
const shuffleBtn = document.getElementById("shuffle-btn");

// Great use of rest parameters here! Same feedback as before in the previous .js files. Consider adding JavaScript comments to the tasks being performed here. 
// Otherwise, this is a great feature that you created for your home page! I now understand what was going on under the hood of your great creative addition feature.
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function renderBoard(items) {
  board.innerHTML = items
    .map((item) => {
      if (item.type === "image") {
        return `
          <div class="card home-image-card">
            <img src="${item.src}" alt="${item.alt ?? ""}">
          </div>
        `;
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
