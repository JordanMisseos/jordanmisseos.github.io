/* Renders project cards + filters from projects.js. No editing needed here. */

(function () {
  const grid = document.getElementById("project-grid");
  const filterBar = document.getElementById("filters");

  /* ----- Render cards ----- */
  function render(filter) {
    grid.innerHTML = "";
    PROJECTS.filter((p) => !filter || p.tags.includes(filter)).forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";

      const media = p.image
        ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />`
        : `<span class="placeholder">[ ${p.tags[0] || "PROJECT"} ]</span>`;

      card.innerHTML = `
        <div class="card__media">${media}</div>
        <div class="card__body">
          <p class="card__status">${p.status}</p>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
          ${p.link ? `<a class="card__link" href="${p.link}" target="_blank" rel="noopener">View project →</a>` : ""}
        </div>`;
      grid.appendChild(card);
    });
  }

  /* ----- Build filter buttons from tags ----- */
  const tags = [...new Set(PROJECTS.flatMap((p) => p.tags))];
  const allBtn = makeButton("All", null);
  allBtn.classList.add("active");
  filterBar.appendChild(allBtn);
  tags.forEach((t) => filterBar.appendChild(makeButton(t, t)));

  function makeButton(label, tag) {
    const b = document.createElement("button");
    b.textContent = label;
    b.addEventListener("click", () => {
      filterBar.querySelectorAll("button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      render(tag);
    });
    return b;
  }

  /* ----- Hero stat + footer year ----- */
  const stat = document.getElementById("stat-projects");
  if (stat) stat.textContent = PROJECTS.length;
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ----- Mobile nav ----- */
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  render(null);
})();
