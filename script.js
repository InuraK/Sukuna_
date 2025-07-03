// Heart click: show message, play music
document.getElementById('heart').addEventListener('click', () => {
  document.getElementById('landing').style.display = 'none';
  const main = document.getElementById('main-content');
  main.classList.remove('hidden');

  // Music
  const audio = document.getElementById('birthday-audio');
  audio.loop = true;
  audio.play();

  // Start falling hearts
  setInterval(createHeart, 500);
});

// Real swipe effect
let startX = 0;
let isSwiping = false;

const mainContent = document.getElementById('main-content');
mainContent.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isSwiping = true;
});

mainContent.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  const deltaX = e.touches[0].clientX - startX;
  if (deltaX < -100) {
    showPoem();
    isSwiping = false;
  }
});

// Mouse drag swipe (desktop)
mainContent.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  isSwiping = true;
});

mainContent.addEventListener('mousemove', (e) => {
  if (!isSwiping) return;
  const deltaX = e.clientX - startX;
  if (deltaX < -100) {
    showPoem();
    isSwiping = false;
  }
});

mainContent.addEventListener('mouseup', () => isSwiping = false);
mainContent.addEventListener('mouseleave', () => isSwiping = false);

function showPoem() {
  document.getElementById('birthday-message').style.display = 'none';
  document.getElementById('poem-section').classList.remove('hidden');
  document.getElementById('poem-section').scrollIntoView({ behavior: 'smooth' });
}

// Falling hearts animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-fall');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
