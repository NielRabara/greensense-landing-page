const modal = document.getElementById('featureModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.querySelector('.close-modal');

const featureData = {
  tracking: {
    title: 'Transaction Tracking',
    text: 'Record every purchase and sale instantly — seeds, fertilizer, soil, and crops — with your phone or computer.'
  },
  insights: {
    title: 'AI Insights',
    text: 'GreenSense analyzes your expenses, sales, and crop performance to reveal hidden patterns and profitability.'
  },
  alerts: {
    title: 'Alerts & Suggestions',
    text: 'Be notified when costs rise, when a crop underperforms, or when a crop becomes highly profitable.'
  },
  reports: {
    title: 'Clear Reports',
    text: 'Simple, visual dashboards that summarize your greenhouse performance without spreadsheets.'
  }
};

// Feature modal
document.querySelectorAll('.more-info').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.info;
    modalTitle.textContent = featureData[key].title;
    modalText.textContent = featureData[key].text;
    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  primaryNav.classList.toggle('active');
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! We\'ll be in touch soon.');
  e.target.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();