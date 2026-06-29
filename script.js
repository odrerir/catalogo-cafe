const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.region === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Add to cart feedback
document.querySelectorAll('.card-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const original = btn.textContent;
    btn.textContent = 'Adicionado ✓';
    btn.style.background = '#C8873A';
    btn.style.color = '#0E0B08';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
  });
});