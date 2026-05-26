import { projects } from "./data.js";
// Same thing here, I would consider adding JavaScript comments to improve readability and understandability of your event handling tasks.

// Initialize grid element
const grid = document.getElementById("projects-grid");

// Peforming operation 1 ... etc.
grid.innerHTML = projects
  .map(
    (p) => `
    <div class="col">
      <h3 class="fw-bold mb-1">${p.name}</h3>
      <p class="text-muted small mb-2">${p.skills}</p>
      <div class="project-image mb-2">
        ${p.image ? `<img src="${p.image}" alt="${p.name} project thumbnail">` : `<i class="bi bi-image"></i>`}
      </div>
      <h5 class="fw-bold mb-1">Description</h5>
      <p class="small">${p.description}</p>
    </div>
  `,
  )
  .join("");

// Performing operation 2 ... etc.
grid.addEventListener("click", (event) => {
  const img = event.target.closest(".project-image img");
  if (!img) return;

  const overlay = document.createElement("div");
  overlay.className = "image-overlay";
  overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
  overlay.addEventListener("click", () => overlay.remove());
  document.body.append(overlay);
});

// Performing operation 3 ... etc.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelector(".image-overlay")?.remove();
});
