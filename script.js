// Get DOM elements
const landing = document.getElementById('landing');
const mainContent = document.getElementById('main-content');
const audio = document.getElementById('birthday-audio');
const msg = document.getElementById('birthday-message');
const poem = document.getElementById('poem-section');
const openWhen = document.getElementById('open-when');

// Start site after clicking the heart
landing.addEventListener('click', () => {
  landing.style.display = 'none';
  mainContent.classList.remove('hidden');
  audio.loop = true;
  audio.play();
  setInterval(createHeart, 500);
});

// Swipe detection for showing poem
let startX = 0, swiping = false;
mainContent.addEventListener('touchstart', e => {
  swiping = true;
  startX = e.touches[0].clientX;
});
mainContent.addEventListener('touchmove', e => {
  if (swiping && e.touches[0].clientX - startX < -100) {
    showPoem();
    swiping = false;
  }
});

mainContent.addEventListener('mousedown', e => {
  swiping = true;
  startX = e.clientX;
});
mainContent.addEventListener('mousemove', e => {
  if (swiping && e.clientX - startX < -100) {
    showPoem();
    swiping = false;
  }
});
mainContent.addEventListener('mouseup', () => swiping = false);
mainContent.addEventListener('mouseleave', () => swiping = false);

// Falling heart animation
function createHeart() {
  const h = document.createElement('div');
  h.className = 'heart-fall';
  h.textContent = '💖';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDuration = 2 + Math.random() * 3 + 's';
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 5000);
}

// Show poem and start typing
function showPoem() {
  msg.style.display = 'none';
  poem.classList.remove('hidden');
  poem.scrollIntoView({ behavior: 'smooth' });
  startTyping();

  // Show Open When section after 10 seconds
  setTimeout(() => {
    openWhen.classList.remove('hidden');
    openWhen.scrollIntoView({ behavior: 'smooth' });
  }, 10000);
}

// Typing animation for poem
function startTyping() {
  const lines = [
    "A Midnight Encounter\n",
    "It started with a question\nin a quiet, glowing night—\na game, a stranger,\na simple ask for help,\nand fate whispered,\n“Watch this.”\n",
    "From strangers to friends,\nthen best of the best—\ndays blurred into joy,\nlaughs stitched into time,\nand suddenly,\nno one stood above you.\n",
    "You made my ordinary days feel seen.\nYou made the pixels feel like home.\nAnd somewhere between\nfriendly banter and silent stays,\nyou fell for me—\nand I, against the odds,\nfell too.\n",
    "We’ve had our storms,\nthe highs and the aches,\nbut still, you remain—\nin every moment my heart takes.\n",
    "If there’s one thing I know,\nit’s this:\nyou are the kindest chapter\nmy heart has ever held.\nAnd no matter where time leads us,\nyou’ll always be\na chapter I’ll reread in my heart forever.\n"
  ];

  poem.innerHTML = ''; // clear poem container

  lines.forEach((line, i) => {
    const p = document.createElement('p');
    p.classList.add('typing');
    poem.appendChild(p);
    typeLine(p, line, i * 3000);
  });

  // Add final soft note
  setTimeout(() => {
    const note = document.createElement('div');
    note.className = 'ending-note';
    note.textContent = '— from the girl who still smiles when she thinks of you.';
    poem.appendChild(note);
    note.scrollIntoView({ behavior: 'smooth' });
  }, lines.length * 3000 + 1500);
}

// Typing line by line
function typeLine(el, text, delay = 0) {
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
  }, delay);
}

// Toggle Open When letters
function toggleLetter(type) {
  const allMessages = document.querySelectorAll('.letter-message');
  allMessages.forEach(msg => msg.classList.add('hidden'));

  const selected = document.getElementById(`msg-${type}`);
  selected.classList.remove('hidden');
  selected.scrollIntoView({ behavior: 'smooth' });
}
