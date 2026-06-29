fetch("dados.js")
  .then((res) => res.json())
  .then((cafes) => {
    const grid = document.getElementById("grid");

    cafes.forEach((cafe) => {
      const card = document.createElement("article");
      card.className = "card" + (cafe.destaque ? " card-featured" : "");
      card.dataset.region = cafe.regiao;

      card.innerHTML = `
        ${cafe.destaque ? '<div class="card-badge">Destaque</div>' : ""}
        <div class="card-roast ${cafe.torraClass}">${cafe.torra}</div>
        <div class="card-body">
          <div class="card-origin">${cafe.graoFino}</div>
          <h3 class="card-name">${cafe.nome}</h3>
          <p class="card-notes">
            <span class="notes-label">Notas</span>
            ${cafe.notas}
          </p>
          <div class="card-meta">
            <span class="meta-score">${cafe.pontos}</span>
            <span class="meta-process">${cafe.processo}</span>
          </div>
          <div class="card-price-row">
            <span class="card-price">${cafe.preco}<small>/250g</small></span>
            <button class="card-btn">Adicionar</button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Filtros — dentro do then porque os cards precisam existir antes
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        document.querySelectorAll(".card").forEach((card) => {
          if (filter === "all" || card.dataset.region === filter) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  });

// Feedback botão
document.getElementById("grid").addEventListener("click", (e) => {
  if (!e.target.classList.contains("card-btn")) return;
  const btn = e.target;
  const original = btn.textContent;
  btn.textContent = "Adicionado ✓";
  btn.style.background = "#C8873A";
  btn.style.color = "#0E0B08";
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    btn.style.color = "";
  }, 1500);
});