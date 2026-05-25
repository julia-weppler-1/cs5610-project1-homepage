import { timeline } from "./data.js";

const container = document.getElementById("timeline");

container.innerHTML = `
  <div class="timeline-scroll">
    <div class="timeline-track">
      ${timeline
        .map(
          (item) => `
          <div class="timeline-item">
            <div class="timeline-date">${item.displayDate}</div>

            <div class="timeline-marker-wrapper">
              <div class="timeline-marker"></div>
            </div>

            <div class="timeline-content">
              <div class="timeline-title">${item.title}</div>
              <div class="timeline-hover">${item.hover}</div>
            </div>
          </div>
        `,
        )
        .join("")}
    </div>
  </div>
`;