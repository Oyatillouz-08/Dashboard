// Theme toggle logic
const themeBtn = document.getElementById('theme-toggle-btn');
themeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});
window.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('light') && !document.body.classList.contains('dark')) {
    document.body.classList.add('light');
  }
});

// Gallery Modal
const gallery = document.getElementById('gallery');
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const closeModal = document.getElementById('close-modal');

if (gallery) {
  gallery.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      modal.style.display = 'flex';
      modalImg.src = item.querySelector('img').src;
      modalDesc.textContent = item.querySelector('.desc').textContent;
    });
  });
}
if (closeModal) {
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// Dropdowns for notifications/messages/profile
document.getElementById('notif-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  document.getElementById('notif-dropdown').style.display = 'block';
  document.getElementById('msg-dropdown').style.display = 'none';
  document.getElementById('profile-dropdown').style.display = 'none';
});
document.getElementById('msg-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  document.getElementById('msg-dropdown').style.display = 'block';
  document.getElementById('notif-dropdown').style.display = 'none';
  document.getElementById('profile-dropdown').style.display = 'none';
});
document.getElementById('profile-pic').addEventListener('click', function(e) {
  e.stopPropagation();
  document.getElementById('profile-dropdown').style.display = 'block';
  document.getElementById('notif-dropdown').style.display = 'none';
  document.getElementById('msg-dropdown').style.display = 'none';
});
window.addEventListener('click', function() {
  document.getElementById('notif-dropdown').style.display = 'none';
  document.getElementById('msg-dropdown').style.display = 'none';
  document.getElementById('profile-dropdown').style.display = 'none';
});

// Search filter for gallery
document.getElementById('gallery-search').addEventListener('input', function() {
  const val = this.value.toLowerCase();
  gallery.querySelectorAll('.gallery-item').forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase();
    item.style.display = title.includes(val) ? '' : 'none';
  });
});

// Modern Calendar Widget
function createCalendar() {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  const firstDay = new Date(year, today.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();

  let calendar = `<div class="calendar-header">${month} ${year}</div><div class="calendar-days">`;
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  days.forEach(d => calendar += `<span>${d}</span>`);
  calendar += '</div><div class="calendar-dates">';
  for (let i = 0; i < firstDay; i++) calendar += `<span></span>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate();
    calendar += `<span class="${isToday ? 'today' : ''}">${d}</span>`;
  }
  calendar += '</div>';
  return calendar;
}
const calendarWidget = document.getElementById('calendar-widget');
if (calendarWidget) {
  calendarWidget.innerHTML = createCalendar();
}

// Quotes Rotator
const quotes = [
  "The purpose of life is not to be happy. It is to be useful. – Ralph Waldo Emerson",
  "Life is what happens when you’re busy making other plans. – John Lennon",
  "The meaning of life is to give life meaning. – Viktor Frankl",
  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
  "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
  "The best way to predict your future is to create it. – Abraham Lincoln",
  "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
  "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
  "Life is really simple, but we insist on making it complicated. – Confucius",
  "The unexamined life is not worth living. – Socrates"
];
let quoteIdx = 0;
const quoteText = document.getElementById('quote-text');
function showQuote() {
  quoteText.textContent = quotes[quoteIdx];
  quoteIdx = (quoteIdx + 1) % quotes.length;
}
showQuote();
setInterval(showQuote, 10000);